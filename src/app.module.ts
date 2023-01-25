import { Module } from '@nestjs/common';
import { ProjectsModule } from './modules/projects/projects.module';
import { PrismaModule } from './infra/db/prisma/prisma.module';

@Module({
  imports: [ProjectsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
