import { Module } from '@nestjs/common';
import { ProjectsService } from './usecases/projects.service';
import { ProjectsController } from './http/controller/projects.controller';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
