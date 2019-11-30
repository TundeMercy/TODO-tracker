import { Router } from 'express';
import authRoute from './auth.route';
import todoRoutes from './todos.routes';
import userRoutes from './userRoutes';

const routes = Router();

routes.use('/auth', authRoute);
routes.use(['/todo', '/todos'], todoRoutes);
routes.use(['/user', '/users'], userRoutes);


export default routes;
