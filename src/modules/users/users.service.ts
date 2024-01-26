import { Injectable } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import UsersRepository from './repositories/users.repository';

@Injectable()
export default class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(user: UserDto): Promise<any> {
    const userCreated = await this.usersRepository.create(user);
    return userCreated;
  }
}
