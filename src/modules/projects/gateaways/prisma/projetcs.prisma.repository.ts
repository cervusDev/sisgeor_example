import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from '../../http/dto/create-project.dto';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { Project } from 'src/modules/projects/http/entities/project.entity';
import { IProjectsRepository } from 'src/modules/projects/gateaways/repository';

@Injectable()
export class ProjectsPrismaRepository implements IProjectsRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async findProjectsByUserId(id: number): Promise<Project[]> {
    return this.prisma.projects.findMany({
      where: { UserId: id },
    });
  }

  public async create(data: CreateProjectDto): Promise<Project> {
    return this.prisma.projects.create({ data: data as any });
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

  public async count?(): Promise<number> {
    return this.prisma.projects.count();
  }
}
