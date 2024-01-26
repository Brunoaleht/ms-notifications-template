import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import UsersService from './users.service';
import { UserDto } from './dtos/user.dto';

@Controller()
export default class UsersExternalController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('user') // This is the name of the event that will be emitted from the user service
  async createdUser(data: UserDto): Promise<any> {
    console.warn('User created: ', data?.email);
    const userCreated = await this.usersService.create(data);
    return userCreated;
  }
}
