import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signup(@Body() createUser: CreateUserDto) {
    return this.authService.signup(createUser);
  }

  @Post('/login')
  login(): string {
    return this.authService.login();
  }

  @Post('/forget-password')
  forgetPassword(): string {
    return this.authService.login();
  }

  @Post('/reset-password')
  resetPassword(): string {
    return this.authService.login();
  }
}
