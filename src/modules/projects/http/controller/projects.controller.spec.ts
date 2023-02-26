import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './projects.controller';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { ProjectsPrismaRepository } from '../../gateaways/prisma/projetcs.prisma.repository';
import { FindAllProjectsUseCase } from '../../usecases/find_all/find_all_projects.usecase';

describe('ProjectsController', () => {
  let controller: ProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [
        PrismaService,
        FindAllProjectsUseCase,
        ProjectsPrismaRepository,
      ],
    }).compile();

    controller = module.get<ProjectsController>(ProjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
