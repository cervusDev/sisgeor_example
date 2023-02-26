import { Role } from '@prisma/client';

export interface UserPayload {
  id: number;
  role: Role;
  email: string;
}
