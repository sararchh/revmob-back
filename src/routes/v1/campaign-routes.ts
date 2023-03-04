import express from 'express';
import { campaignSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import {list, store, update}from '@/controllers/campaigns-controller';

const campaignroutes = express.Router();

campaignroutes
  .get('/fetch', list)
  .post('/campaign', [validateBody(campaignSchema)], store)
  .put('/campaign', [validateBody(campaignSchema)], update)



export default campaignroutes;
