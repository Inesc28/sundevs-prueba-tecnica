import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class VideosServices {
  private readonly DATA_PATH = join(
    process.cwd(),
    'src',
    'Data',
    'videos.json',
  );

  getVideos() {
    try {
      const { items } = JSON.parse(readFileSync(this.DATA_PATH, 'utf-8'));

      return items.map((item: any) => this.transformVideo(item));
    } catch (error) {
      throw new InternalServerErrorException(
        'Error al procesar los datos de YouTube',
      );
    }
  }

  private transformVideo({ snippet, statistics }: any) {
    return {
      thumbnail: snippet.thumbnails.high.url,
      title: snippet.title,
      author: snippet.channelTitle,
      relativeDate: this.formatDate(snippet.publishedAt),
      hypeScore: this.calculateHype(snippet.title, statistics),
    };
  }

  private calculateHype(title: string, stats: any): number {
    const likes = parseInt(stats.likeCount) || 0;
    const views = parseInt(stats.viewCount) || 0;
    const comments = stats.commentCount
      ? parseInt(stats.commentCount)
      : undefined;

    if (comments === undefined || views === 0) return 0;

    const score = (likes + comments) / views;
    return title.toLowerCase().includes('tutorial') ? score * 2 : score;
  }

  private formatDate(dateStr: string): string {
    const diffMs = Date.now() - new Date(dateStr).getTime();
    const diffDays = Math.floor(diffMs / 864e5);
    const diffMonths = Math.floor(diffDays / 30);

    if (diffMonths > 0)
      return `Hace ${diffMonths} mes${diffMonths > 1 ? 'es' : ''}`;
    if (diffDays > 0) return `Hace ${diffDays} día${diffDays > 1 ? 's' : ''}`;
    return 'Hace poco';
  }
}
