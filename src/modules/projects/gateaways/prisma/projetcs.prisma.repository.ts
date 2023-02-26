import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { Project } from 'src/modules/projects/http/entities/project.entity';
import { IProjectsRepository } from 'src/modules/projects/gateaways/repository';

@Injectable()
export class ProjectsPrismaRepository implements IProjectsRepository {
  constructor(private readonly prisma: PrismaService) {}
  public create(data: Project): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  public update(id: number, data: Partial<Project>): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  public getById(id: number): Promise<Project> {
    throw new Error('Method not implemented.');
  }
  public async findAll(): Promise<Project[]> {
    return this.prisma.projects.findMany();
  }
  public delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  public createMany?(data: Project[], args?: never): Promise<Project[]> {
    throw new Error('Method not implemented.');
  }
  public count?(): Promise<number> {
    throw new Error('Method not implemented.');
  }
}
