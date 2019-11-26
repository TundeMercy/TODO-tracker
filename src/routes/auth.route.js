import { Router } from 'express';
import authentication from '../middleware/auth';
import authSchemas from '../validations/auth.validator';
import { createUser, signin } from '../controllers/auth.controller';
import validator from '../middleware/validator';


const { checkExistingUser } = authentication;
const { signupSchema, signinSchema } = authSchemas;

const authRoute = Router();

authRoute.post(
  '/signup',
  validator(signupSchema),
  checkExistingUser,
  createUser
);

authRoute.post(
  '/signin',
  validator(signinSchema),
  signin
);

export default authRoute;
