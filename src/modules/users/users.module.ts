import { Module } from '@nestjs/common';
import { UsersController } from './http/controller/users.controller';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { CreateUsersUseCase } from './usecases/create/create_users.usecase';
import { FindAllUsersUseCase } from './usecases/find_all/find_all_users.usecase';
import { UsersPrismaRepository } from './gateaways/prisma/users.prisma.repository';
import { FindUserByEmailUseCase } from './usecases/find_by_email/find_by_email.usecase';

@Module({
  controllers: [UsersController],
  providers: [
    PrismaService,
    CreateUsersUseCase,
    FindAllUsersUseCase,
    UsersPrismaRepository,
    FindUserByEmailUseCase,
  ],
})
export class UsersModule {}
