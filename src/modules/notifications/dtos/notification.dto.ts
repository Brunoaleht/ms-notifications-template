export class NotificationDto {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  title: string;
  message: string;
  type: string;
  userId: number;
}
