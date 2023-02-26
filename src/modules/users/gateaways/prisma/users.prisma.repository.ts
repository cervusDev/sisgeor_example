import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../repository';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { User } from 'src/modules/users/http/entities/users.entity';

@Injectable()
export class UsersPrismaRepository implements IUsersRepository {
  constructor(private readonly prisma: PrismaService) {}
  public getByEmail(email: string): Promise<User> {
    return this.prisma.user.findFirst({ where: { email } });
  }
  public create(data: User): Promise<User> {
    return this.prisma.user.create({ data });
  }
  public update(id: number, data: Partial<User>): Promise<User> {
    throw new Error('Method not implemented.');
  }
  public getById(id: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
  public async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
  public delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  public createMany?(data: User[], args?: never): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  public count?(): Promise<number> {
    throw new Error('Method not implemented.');
  }
}
