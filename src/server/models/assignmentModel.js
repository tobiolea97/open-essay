import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AssignmentSchema = new Schema({
    id: {
        type: String
    },
    assignment: {
        type: Array
    },
    level: {
        type: String
    },
    writingArea: {
        type: String
    },
    name: {
        type: String
    }

});
