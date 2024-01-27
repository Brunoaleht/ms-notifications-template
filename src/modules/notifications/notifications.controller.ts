import { Controller } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { PubSubService } from '../global/pubsub/pubsub.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class NotificationsController {
  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly pubSubService: PubSubService,
  ) {}

  @MessagePattern('user')
  async create(data: any): Promise<any> {
    console.log('User created test: ', data?.email);
    const notification = {
      title: 'User created',
      type: 'info',
      message: `User created: ${data?.email}`,
      userId: +data?.id,
    };
    const createdNotification =
      await this.notificationsService.create(notification);
    this.pubSubService.publish(
      'notificationCreated',
      createdNotification,
      'notification',
    );
    console.log('Notification created: ', createdNotification);
    return createdNotification;
  }
}
