import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/common/interfaces/usecase';
import { ProjectsPrismaRepository } from '../../gateaways/prisma/projetcs.prisma.repository';

@Injectable()
export class FindAllProjectsUseCase implements UseCase<any, any> {
  constructor(private readonly prismaRepository: ProjectsPrismaRepository) {}

  public async execute() {
    return this.prismaRepository.findAll();
  }
}
