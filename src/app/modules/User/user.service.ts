/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from './user.model';
import { TUser } from './user.interface';


const createUserIntoDB = async (
  payload: TUser,
) => {
  payload.role = 'user';

  
  const result = await User.create(payload);
  return result;
};


const getMe = async (userId: string, role: string) => {
  let result = null;

  if (role === 'admin') {
    result = await User.findOne({ id: userId }).populate('user');
  }

  return result;
};

const changeStatus = async (id: string, payload: { status: string }) => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getMe,
  changeStatus,
};
