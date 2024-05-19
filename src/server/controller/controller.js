import mongoose from 'mongoose';
import { LevelSchema } from '../models/levelModel.js';
import { WritingAreaSchema } from '../models/writingAreaModel.js';
import { AssignmentSchema } from '../models/assignmentModel.js';
import { UserSchema } from '../models/userModel.js';

const levelSchema = mongoose.model('levels', LevelSchema);
const writingAreaSchema = mongoose.model('writing-areas', WritingAreaSchema);
const assignmentSchema = mongoose.model('assignments', AssignmentSchema);
const userSchema = mongoose.model('users', UserSchema);

export const getLevels = async (req, res) => {
    try {
        const levels = await levelSchema.find();
        res.status(200).json(levels);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getWritingAreas = async (req, res) => {
    try {
        const levels = await writingAreaSchema.find();
        res.status(200).json(levels);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getWritings = async (req, res) => {
    try {
        const user = await userSchema.findOne({email: "tobiolea97@gmail.com"});
        const assignments = await assignmentSchema.find();

        const assignmentIds = user.writings.map(writing => writing.assignmentId);
        const response = [];
        assignmentIds.forEach(assignmentId => {
            const assignment = assignments.find(assignment => assignment.id === assignmentId);
            response.push(assignment);
        });

        res.status(200).json(response);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
};
