import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserJwt } from '../interfaces/User';
import { UserPayload } from '../interfaces/UserPayload';
import { BadRequestException, Injectable } from '@nestjs/common';
import { FindAllUsersUseCase } from 'src/modules/users/usecases/find_all/find_all_users.usecase';

@Injectable()
export class JwtUsecase {
  constructor(
    private readonly jwtService: JwtService,
    private readonly findAllUsersRepository: FindAllUsersUseCase,
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
    const users = await this.findAllUsersRepository.execute();
    if (users.length === 0) {
      throw new BadRequestException('Banco de dados não possui usuários');
    }

    if (!users.some((item) => item.email === email)) {
      throw new BadRequestException('Usuário não encontrado.');
    }

    const user = users.find((item) => item.email === email);

    let isPasswordValid = false;
    user && (isPasswordValid = await bcrypt.compare(password, user.password));

    if (isPasswordValid) {
      return { ...user, password: null };
    }

    throw new BadRequestException(`Senha incorreta`);
  }
}
