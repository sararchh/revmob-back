import express from 'express';
import { campaignSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import {list, store} from '@/controllers/campaigns-controller';

const campaignroutes = express.Router();

campaignroutes
  .get('/fetch', list)
  .post('/campaign', [validateBody(campaignSchema)], store)



export default campaignroutes;
