import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';
import { UserDto } from '../dtos/user.dto';

@Injectable()
export default class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: UserDto): Promise<any> {
    const newUser = await this.prismaService.user.create({ data: user });
    return newUser;
  }
}
