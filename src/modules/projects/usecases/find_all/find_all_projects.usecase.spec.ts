import { Test, TestingModule } from '@nestjs/testing';
import { FindAllProjectsUseCase } from './find_all_projects.usecase';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { ProjectsPrismaRepository } from '../../gateaways/prisma/projetcs.prisma.repository';

describe('find all usecases', () => {
  let service: FindAllProjectsUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        FindAllProjectsUseCase,
        ProjectsPrismaRepository,
      ],
    }).compile();

    service = module.get<FindAllProjectsUseCase>(FindAllProjectsUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
