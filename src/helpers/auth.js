/* eslint-disable import/prefer-default-export */
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

config();

export const generateToken = ({ id, email }) => {
  const token = jwt.sign({ id, email }, process.env.JWT_KEY, { expiresIn: '24h' });
  return `Bearer ${token}`;
};
