import { Role } from '@prisma/client';
import { User } from '../entities/users.entity';

export class CreateUserDto implements User {
  role: Role;
  email: string;
  password: string;
}
