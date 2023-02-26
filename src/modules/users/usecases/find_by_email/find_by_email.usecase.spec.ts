import { Test, TestingModule } from '@nestjs/testing';
import { FindUserByEmailUseCase } from './find_by_email.usecase';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { UsersPrismaRepository } from '../../gateaways/prisma/users.prisma.repository';

describe('find all usecases', () => {
  let service: FindUserByEmailUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, FindUserByEmailUseCase, UsersPrismaRepository],
    }).compile();

    service = module.get<FindUserByEmailUseCase>(FindUserByEmailUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
