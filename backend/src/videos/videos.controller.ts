import { Controller, Get } from '@nestjs/common';
import { VideosServices } from './videos.service';

@Controller('api')
export class VideosController {
  constructor(private readonly videosServices: VideosServices) {}

  @Get('videos')
  getAll() {
    return this.videosServices.getVideos();
  }
}
