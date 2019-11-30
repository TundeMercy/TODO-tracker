import { Router } from 'express';
import { checkExistingUser } from '../middleware/auth';
import authSchemas from '../schemas/auth.schema';
import { createUser, signin } from '../controllers/auth.controller';
import validator from '../middleware/validator';


const { signupSchema, signinSchema } = authSchemas;

const authRoute = Router();

authRoute.post(
  '/user/signup',
  validator(signupSchema),
  checkExistingUser,
  createUser
);

authRoute.post(
  '/user/signin',
  validator(signinSchema),
  signin
);

export default authRoute;
