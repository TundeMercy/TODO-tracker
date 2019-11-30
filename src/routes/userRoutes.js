import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.controller';


const userRoutes = Router();

userRoutes.get(
  '/',
  getUsers
);

userRoutes.get(
  '/:userId',
  getUser
);

export default userRoutes;
