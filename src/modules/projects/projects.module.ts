import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { ProjectsController } from './http/controller/projects.controller';
import { FindAllProjectsUseCase } from './usecases/find_all/find_all_projects.usecase';
import { ProjectsPrismaRepository } from './gateaways/prisma/projetcs.prisma.repository';

@Module({
  controllers: [ProjectsController],
  providers: [PrismaService, FindAllProjectsUseCase, ProjectsPrismaRepository],
})
export class ProjectsModule {}
