import { Test, TestingModule } from '@nestjs/testing';
import { CreateUsersUseCase } from './create_users.usecase';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { UsersPrismaRepository } from '../../gateaways/prisma/users.prisma.repository';

describe('find all usecases', () => {
  let service: CreateUsersUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, CreateUsersUseCase, UsersPrismaRepository],
    }).compile();

    service = module.get<CreateUsersUseCase>(CreateUsersUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
