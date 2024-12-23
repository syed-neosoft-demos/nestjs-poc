import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './auth.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from '../users/users.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Users.name) private catModel: Model<Users>) {}

  async signup(createUser: CreateUserDto): Promise<Users> {
    const hash = await bcrypt.hash(
      createUser.password,
      Number(process.env.PASSWORD_ENCRYPT_ROUND),
    );
    const createdCat = new this.catModel({ ...createUser, password: hash });
    return await createdCat.save();
  }

  login(): string {
    return 'Hello from login route!';
  }
}
