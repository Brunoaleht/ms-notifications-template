import { Injectable } from '@nestjs/common';
import { NotificationDto } from '../dtos/notification.dto';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';

@Injectable()
export default class NotificationsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(notification: NotificationDto): Promise<any> {
    const createdNotification = await this.prismaService.notifications.create({
      data: notification,
    });
    return createdNotification;
  }

  async findAllMessageByUser(userId: number): Promise<any> {
    const notifications = await this.prismaService.notifications.findMany({
      where: {
        userId,
      },
    });
    return notifications;
  }
}
