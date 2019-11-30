/* eslint-disable import/prefer-default-export */
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

config();

export const generateToken = (id) => jwt.sign(id, process.env.JWT_KEY);
