import { Injectable } from '@nestjs/common';
import { UserFromJwt } from '../interfaces/UserFromJwt';
import { UserPayload } from '../interfaces/UserPayload';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }
  async validate(payload: UserPayload): Promise<UserFromJwt> {
    return { id: payload.id, email: payload.email };
  }
}
