import { config } from 'dotenv';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../docs/dae-alright.json';
import router from './routes';

config();

const app = express();

const { NODE_ENV, PORT } = process.env;
if (NODE_ENV === 'development' || NODE_ENV === 'production') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(router);

const port = NODE_ENV === 'test' ? 8378 : PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
