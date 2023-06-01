import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/common/interfaces/usecase';
import { Project } from '../../http/entities/project.entity';
import { CreateProjectDto } from '../../http/dto/create-project.dto';
import { ProjectsPrismaRepository } from '../../gateaways/prisma/projetcs.prisma.repository';

@Injectable()
// eslint-disable-next-line prettier/prettier
export class CreateProjectsUseCase implements UseCase<CreateProjectDto, Project> {
  constructor(private readonly prismaRepository: ProjectsPrismaRepository) {}

  public async execute(input: CreateProjectDto): Promise<Project> {
    return this.prismaRepository.create(input);
  }
}
