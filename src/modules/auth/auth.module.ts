import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtUsecase } from './usecase/jwt.usecase';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './provider/jwt.strategy';
import { AuthController } from './http/auth.controller';
import { FindAllUsersUseCase } from '../users/usecases/find_all/find_all_users.usecase';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { UsersPrismaRepository } from '../users/gateaways/prisma/users.prisma.repository';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    JwtUsecase,
    JwtStrategy,
    PrismaService,
    FindAllUsersUseCase,
    UsersPrismaRepository,
  ],
})
export class AuthModule {}
