import * as notificationData from "../../../../notifications.json";

export const function getAllNotificationsByUser(userId) {
  return notificationData.filter((Notification) => notificationData.author.id === userId.id).map((Notification) => Notification.context);
}