import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './auth.dto';

@Injectable()
export class AuthService {
  signup(createUser: CreateUserDto) {
    return {
      message: "'Hello from login route!'",
      data: createUser,
    };
  }

  login(): string {
    return 'Hello from login route!';
  }
}
