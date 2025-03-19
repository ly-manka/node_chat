import { UserRoom } from '../models/userRoom.model.js';

const create = ({ userId, roomId }) => {
  return UserRoom.create({ userId, roomId });
};

const addMember = ({ userId, roomId }) => {
  return UserRoom.create({ userId, roomId });
};

const findMember = ({ userId, roomId }) => {
  return UserRoom.findOne({ where: { userId, roomId } });
};

export const userRoomService = {
  create,
  addMember,
  findMember,
};
