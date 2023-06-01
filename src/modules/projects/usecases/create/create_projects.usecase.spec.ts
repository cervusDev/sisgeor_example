import { Test, TestingModule } from '@nestjs/testing';
import { CreateProjectsUseCase } from './create_projects.usecase';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { ProjectsPrismaRepository } from '../../gateaways/prisma/projetcs.prisma.repository';

describe('Create usecases', () => {
  let service: CreateProjectsUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        CreateProjectsUseCase,
        ProjectsPrismaRepository,
      ],
    }).compile();

    service = module.get<CreateProjectsUseCase>(CreateProjectsUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
