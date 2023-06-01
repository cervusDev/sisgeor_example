import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { ProjectsController } from './http/controller/projects.controller';
import { FindAllProjectsUseCase } from './usecases/find_all/find_all_projects.usecase';
import { ProjectsPrismaRepository } from './gateaways/prisma/projetcs.prisma.repository';
import { CreateProjectsUseCase } from './usecases/create/create_projects.usecase';
import { FindProjectsByUserIdUseCase } from './usecases/findProjectsByUserId/find_projects_by_userId.usecase';

@Module({
  controllers: [ProjectsController],
  providers: [
    PrismaService,
    FindAllProjectsUseCase,
    CreateProjectsUseCase,
    FindProjectsByUserIdUseCase,
    ProjectsPrismaRepository,
  ],
})
export class ProjectsModule {}
