import { Router } from 'express';

import validator from '../middleware/validator';
import todoSchema from '../schemas/todo.schema';

import { createTodo, getTodos, getTodo } from '../controllers/todo.controllers';
import { authenticateUser } from '../middleware/auth';

const todoRoutes = Router();

todoRoutes.post('/',
  authenticateUser,
  validator(todoSchema),
  createTodo);

todoRoutes.get('/',
  authenticateUser,
  getTodos);

todoRoutes.get('/:id',
  authenticateUser,
  getTodo);

export default todoRoutes;
