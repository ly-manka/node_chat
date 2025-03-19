import { Message } from '../models/message.model.js';

const create = ({ userId, roomId, text }) => {
  return Message.create({ userId, roomId, text });
};

const getAllMessages = (roomId) => {
  return Message.findAll({ where: { roomId } });
};

export const messageService = {
  create,
  getAllMessages,
};
