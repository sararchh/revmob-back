import mongoose from 'mongoose';

export interface ICampaign extends mongoose.Document {
    title: string;
    author: string;
    image: string;
    type: string;
    bid: number;
    segmentation: string;
    createdAt: string;
}