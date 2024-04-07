import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const LevelSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    }
});
