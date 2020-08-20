import { sign } from 'jsonwebtoken';
import { User } from './../../../entity/User';
import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from './../../../environments';

export const createAccessToken = (user: User) => {
  return sign(
    { userId: user._id },
    JWT_ACCESS_SECRET,
    { expiresIn: "30m" });
}

export const createRefreshToken = (user: User) => {
  return sign(
    { userId: user._id },
    JWT_REFRESH_SECRET,
    { expiresIn: "7d" });
}