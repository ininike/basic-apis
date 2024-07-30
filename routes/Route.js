import express from 'express';
import { registrationController, signinController } from '../controllers/userAccountController.js';

export const route = express.Router();

route.get('/api/register',registrationController.getPage)

route.post('/api/register',registrationController.postRegistration)

route.post('/api/signin', signinController.postSignIn)