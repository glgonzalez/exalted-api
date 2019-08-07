import mongoose, { Schema } from 'mongoose';

const usersModel = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: 'user' },
    insert_date: { type: Date, default: Date.now() },
    date_updated: { type: Date, default: Date.now() }
  }, { collection: 'users' }
);

export const Users = mongoose.model('users', usersModel);
