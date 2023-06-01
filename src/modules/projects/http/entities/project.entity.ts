import { Projects as PrismaProjects } from '@prisma/client';

export class Project implements PrismaProjects {
  id: number;
  name: string;

  UserId: number;
  description: string;

  updatedAt: Date;
  createdAt: Date;

  deletedAt: Date;
}
