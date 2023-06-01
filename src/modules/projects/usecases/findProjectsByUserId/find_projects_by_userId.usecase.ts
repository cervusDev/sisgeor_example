import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/common/interfaces/usecase';
import { Project } from '../../http/entities/project.entity';
import { ProjectsPrismaRepository } from '../../gateaways/prisma/projetcs.prisma.repository';

@Injectable()
export class FindProjectsByUserIdUseCase implements UseCase<number, Project[]> {
  constructor(private readonly prismaRepository: ProjectsPrismaRepository) {}

  public execute(input: number): Promise<Project[]> {
    return this.prismaRepository.findProjectsByUserId(input);
  }
}
