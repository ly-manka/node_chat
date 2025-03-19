'use strict';

import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/user.route.js';
import { roomRouter } from './routes/room.routes.js';
import { errorMiddleware } from './middleware/errorMiddleware.js';
import { setupWebSocket } from './wsServer.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('/room', roomRouter);

app.use(errorMiddleware);

const server = app.listen(3005);

setupWebSocket(server);
