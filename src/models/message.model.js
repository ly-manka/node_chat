import { DataTypes } from 'sequelize';
import { client } from '../utils/db.js';
import { User } from './user.model.js';
import { Room } from './room.model.js';

export const Message = client.define(
  'message',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    updatedAt: false,
  },
);

Message.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasMany(Message, { foreignKey: 'userId' });

Message.belongsTo(Room, { foreignKey: 'roomId', onDelete: 'CASCADE' });
Room.hasMany(Message, { foreignKey: 'roomId' });
