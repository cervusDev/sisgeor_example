import { Test, TestingModule } from '@nestjs/testing';
import { FindAllUsersUseCase } from './find_all_users.usecase';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { UsersPrismaRepository } from '../../gateaways/prisma/users.prisma.repository';

describe('find all usecases', () => {
  let service: FindAllUsersUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, FindAllUsersUseCase, UsersPrismaRepository],
    }).compile();

    service = module.get<FindAllUsersUseCase>(FindAllUsersUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
