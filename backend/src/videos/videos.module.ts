import { Module } from '@nestjs/common';
import { VideosController } from './videos.controller';
import { VideosServices } from './videos.service';

@Module({
  controllers: [VideosController],
  providers: [VideosServices],
})
export class VideosModule {}
