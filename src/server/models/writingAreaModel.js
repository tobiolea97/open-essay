import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const WritingAreaSchema = new Schema({
    id: {type: String},
    name: {type: String},
    writingArea: {type: String},
    level: {type: String},
});
