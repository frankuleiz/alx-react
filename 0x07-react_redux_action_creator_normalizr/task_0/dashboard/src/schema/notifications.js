import * as notificationData from "../../../../notifications.json";

export default function getAllNotificationsByUser(userId) {
  return notificationData.filter((Notification) => notificationData.author.id === userId.id).map((Notification) => Notification.context);
}