import { Repository } from 'src/common/interfaces/repository';
import { User } from '../http/entities/users.entity';

export abstract class IUsersRepository extends Repository<User> {
  public abstract getByEmail(email: string): Promise<User>;
}
