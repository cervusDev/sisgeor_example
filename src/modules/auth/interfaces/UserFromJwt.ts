interface UserEntity {
  id: number;
  email: string;
}
export type UserFromJwt = Partial<UserEntity>;
