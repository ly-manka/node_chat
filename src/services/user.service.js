import { User } from '../models/user.model.js';

const findUserById = (id) => {
  return User.findOne({ where: { id } });
};

const findUser = (username) => {
  return User.findOne({ where: { username } });
};

const create = (username) => {
  return User.create({ username });
};

export const userService = {
  findUser,
  create,
  findUserById,
};
