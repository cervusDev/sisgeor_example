import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';
import { UseCase } from 'src/common/interfaces/usecase';
import { User } from '../../http/entities/users.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersPrismaRepository } from '../../gateaways/prisma/users.prisma.repository';

interface IRequest {
  input: User;
  role: Role;
}

@Injectable()
export class CreateUsersUseCase implements UseCase<IRequest, User> {
  constructor(private readonly repository: UsersPrismaRepository) {}

  public async execute({ input, role }: IRequest): Promise<User> {
    if (role !== 'admin') {
      throw new BadRequestException(
        'usuário não possui permissão para está ação',
      );
    }
    const user = await this.repository.create({
      ...input,
      password: await bcrypt.hash(input.password, 12),
    });

    return {
      ...user,
      password: null,
    };
  }
}
