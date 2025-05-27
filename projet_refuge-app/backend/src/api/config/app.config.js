import express from 'express';
import compression from 'compression';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from './swagger.config.js';
import { limiter } from './rate-limit.config.js';
import cors from './cors.config.js';
import headers from './headers.config.js';
import hpp from 'hpp';

import { contactRouter } from '../../resources/contact/contact.routes.js';
import { authRouter } from '../../auth/auth.routes.js';
import { userRouter } from '../../resources/user/user.routes.js';

import ErrorCatcher from '../middlewares/errors.middleware.js';
import Logger from './logger.config.js';

const app = express();

app.use(headers);
app.use(cors);
app.use(hpp());
app.use(limiter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Logger.writeStream());

app.use(express.static('public'));

app.use(compression());

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/contacts', contactRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(ErrorCatcher);

export default app;
