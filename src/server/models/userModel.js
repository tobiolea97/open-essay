import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    email: {
        type: Array
    },
    googleId: {
        type: String
    },
    isVerified: {
        type: String
    },
    writings: []
});
