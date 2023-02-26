import { createParamDecorator, ExecutionContext } from '@nestjs/common';

interface TokenUser {
  id: number;
  role: 'user' | 'admin';
  email: string;
  iat: number;
  exp: number;
}

function parseJwt(token) {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

export const isAdmin = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const headers: string[] = request.rawHeaders;
  const item = headers.filter((item) => item.split(' ')[0] === 'Bearer')[0];
  const token = item.split(' ')[1];
  const user: TokenUser = { ...parseJwt(token) };
  if (user.role !== 'admin') {
    return false;
  }
  return true;
});
