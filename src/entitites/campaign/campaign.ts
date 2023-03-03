import mongoose from 'mongoose';
import {ICampaign} from './campaign-types';

const CampaignSchema = new mongoose.Schema({
    title: { type: String, required: true, select: true },
    author: { type: String, required: true, select: true },
    type: { type: String, enum: ['cpm', 'cpc', 'cpi'], default: 'cpm' },
    bid: { type: Number, required: true, select: true },
    segmentation: { type: String, required: true, select: true },
    createdAt: { type: Date, default: Date.now }
});


export default mongoose.model<ICampaign>('campaigns', CampaignSchema);
