import { Injectable } from '@nestjs/common';
import NotificationsRepository from './repositories/notifications.repository';
import { NotificationDto } from './dtos/notification.dto';

@Injectable()
export class NotificationsService {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async create(notification: NotificationDto): Promise<any> {
    console.log('notification', notification);
    const createdNotification =
      await this.notificationsRepository.create(notification);
    return createdNotification;
  }

  async findAllMessageByUser(userId: number): Promise<any> {
    const notifications =
      await this.notificationsRepository.findAllMessageByUser(userId);
    return notifications;
  }
}
