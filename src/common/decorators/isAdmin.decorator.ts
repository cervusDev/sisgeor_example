import { parse_jwt } from '../utils/parse_jwt';
import { Role as PrismaRole } from '@prisma/client';
import { permission_generator } from '../utils/permission_generator';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export type Role = PrismaRole;

interface TokenUser {
  id: number;
  role: Role;
  iat: number;
  exp: number;
  email: string;
}

export const isRole = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const headers: string[] = request.rawHeaders;

  const item = headers.filter((item) => item.split(' ')[0] === 'Bearer')[0];
  const token = item.split(' ')[1];

  const user: TokenUser = { ...parse_jwt(token) };
  return permission_generator(user.role);
});
