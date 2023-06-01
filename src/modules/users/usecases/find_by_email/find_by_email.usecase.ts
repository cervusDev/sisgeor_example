import { UseCase } from 'src/common/interfaces/usecase';
import { User } from '../../http/entities/users.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersPrismaRepository } from '../../gateaways/prisma/users.prisma.repository';

interface IReq {
  email: string;
}

@Injectable()
export class FindUserByEmailUseCase implements UseCase<IReq, User> {
  constructor(private readonly repository: UsersPrismaRepository) {}

  public execute({ email }: IReq): Promise<User> {
    if (!email) {
      throw new BadRequestException('email ausente.');
    }
    return this.repository.getByEmail(email);
  }
}
