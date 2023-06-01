import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { PrismaModule } from './infra/database/prisma/prisma.module';

@Module({
  imports: [ProjectsModule, UsersModule, AuthModule, PrismaModule],
  providers: [],
})
export class AppModule {}
