import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/common/interfaces/usecase';
import { UsersPrismaRepository } from '../../gateaways/prisma/users.prisma.repository';

@Injectable()
export class FindAllUsersUseCase implements UseCase<any, any> {
  constructor(private readonly repository: UsersPrismaRepository) {}
  public async execute() {
    return this.repository.findAll();
  }
}
