import express from 'express';
import { userController } from '../controllers/user.controller.js';
import { catchError } from '../utils/catchError.js';

export const userRouter = new express.Router();

userRouter.post('/', catchError(userController.create));
userRouter.get('/:id', catchError(userController.getOne));
