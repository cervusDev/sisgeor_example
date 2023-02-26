import { JwtUsecase } from '../usecase/jwt.usecase';
import { LoginRequestBody } from '../interfaces/LoginRequestBody';
import { isPublic } from 'src/common/decorators/public.decorator';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  constructor(private readonly authService: JwtUsecase) {}

  @isPublic()
  @Post('/login-netuno')
  @HttpCode(HttpStatus.OK)
  login(@Body() { email, password }: LoginRequestBody) {
    return this.authService.login(email, password);
  }
}
