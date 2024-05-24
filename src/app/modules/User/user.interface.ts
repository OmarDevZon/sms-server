/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
// import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface TUser {
  email: string;
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  role: 'superAdmin' | 'admin' | 'seller' | 'buyer' | 'user';
  status: 'in-progress' | 'blocked';
  profileImg?: string;
  isDeleted: boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
