import { UserPayload } from './UserPayload';
export type UserToken = Partial<UserPayload> & {
  accessToken: string;
};
