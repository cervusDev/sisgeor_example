import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { FindProjectsByUserIdUseCase } from './find_projects_by_userId.usecase';
import { ProjectsPrismaRepository } from '../../gateaways/prisma/projetcs.prisma.repository';

describe('Create usecases', () => {
  let service: FindProjectsByUserIdUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        ProjectsPrismaRepository,
        FindProjectsByUserIdUseCase,
      ],
    }).compile();

    service = module.get<FindProjectsByUserIdUseCase>(
      FindProjectsByUserIdUseCase,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
