import { UserPayload } from './UserPayload';
export type UserJwt = Partial<UserPayload> & {
  password?: string;
};
