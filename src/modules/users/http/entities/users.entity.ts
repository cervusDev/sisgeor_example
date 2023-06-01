import { Role } from '@prisma/client';
export class User {
  role: Role;
  id?: number;

  email: string;
  password: string;
}
