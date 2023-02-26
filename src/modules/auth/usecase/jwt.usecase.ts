import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserJwt } from '../interfaces/User';
import { UserPayload } from '../interfaces/UserPayload';
import { BadRequestException, Injectable } from '@nestjs/common';
import { FindAllUsersUseCase } from 'src/modules/users/usecases/find_all/find_all_users.usecase';
import { FindUserByEmailUseCase } from 'src/modules/users/usecases/find_by_email/find_by_email.usecase';

@Injectable()
export class JwtUsecase {
  constructor(
    private readonly jwtService: JwtService,
    private readonly findAllUsersRepository: FindAllUsersUseCase,
    private readonly findUserByEmailRepository: FindUserByEmailUseCase,
  ) {}

  async login(email: string, password: string) {
    const user: UserJwt = await this.validateUser(email, password);
    const payload: UserPayload = {
      id: user.id,
      role: user.role,
      email: user.email,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  private async validateUser(email: string, password: string) {
    const allUsers = await this.findAllUsersRepository.execute();
    if (allUsers.length === 0) {
      throw new BadRequestException('Banco de dados não possui usuários');
    }

    if (!allUsers.some((item) => item.email === email)) {
      throw new BadRequestException('Usuário não encontrado.');
    }

    const user: UserJwt = await this.findUserByEmailRepository.execute({
      email,
    });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return { ...user, password: undefined };
      }

      throw new BadRequestException(`Senha incorreta`);
    }
  }
}
