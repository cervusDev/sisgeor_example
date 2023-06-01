import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './projects.controller';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { CreateProjectsUseCase } from '../../usecases/create/create_projects.usecase';
import { FindAllProjectsUseCase } from '../../usecases/find_all/find_all_projects.usecase';
import { ProjectsPrismaRepository } from '../../gateaways/prisma/projetcs.prisma.repository';
import { FindProjectsByUserIdUseCase } from '../../usecases/findProjectsByUserId/find_projects_by_userId.usecase';

describe('ProjectsController', () => {
  let controller: ProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [
        PrismaService,
        CreateProjectsUseCase,
        FindAllProjectsUseCase,
        ProjectsPrismaRepository,
        FindProjectsByUserIdUseCase,
      ],
    }).compile();

    controller = module.get<ProjectsController>(ProjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
