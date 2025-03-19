import { client } from '../utils/db.js';
import { Room } from './room.model.js';
import { User } from './user.model.js';

export const UserRoom = client.define('user_room', {}, { timestamps: false });

User.belongsToMany(Room, {
  through: UserRoom,
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Room.belongsToMany(User, {
  through: UserRoom,
  foreignKey: 'roomId',
  onDelete: 'CASCADE',
});
