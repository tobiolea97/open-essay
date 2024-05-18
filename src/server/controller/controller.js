import mongoose from 'mongoose';
import { LevelSchema } from '../models/levelModel.js';
import { WritingAreaSchema } from '../models/writingAreaModel.js';
import { AssignmentSchema } from '../models/assignmentModel.js';
import { UserSchema } from '../models/userModel.js';
import { createRequire } from 'module';
import jwt from 'jsonwebtoken';


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

export const getAssignment = async (req, res) => {
    const { level, writingArea } = req.query;
    try {
        const user = await userSchema.findOne({email: "tobiolea97@gmail.com"});
        const assignments = await assignmentSchema.find({level, writingArea});
        //return the first assignment that is not present in the user's writings
        const assignment = assignments.find(assignment => !user.writings.some(writing => writing.assignmentId === assignment.id));
        res.status(200).json(assignment);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const saveWriting = async (req, res) => {
    const { writing, assignmentId, feedback  } = req.body;
    // const authHeader = req.headers.authorization;
    // if (authHeader) {
    //     const token = authHeader.split(' ')[1];
        try {
            // const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // const decodedToken = jwt.decode(token);
            // const email = decodedToken.email;
            // debugger;
            // const user = await userSchema.findOne({email});
            const user = await userSchema.findOne({email:"tobiolea97@gmail.com"});
            // if writings property does not exist, create it
            if (!user.writings) {
                user.writings = [];
            }
            user.writings.push({
                    assignmentId: assignmentId,
                    writing: writing,
                    feedback: feedback
                });

            await user.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({ message: error.message });
        // }
    }
}

export const getWriting = async (req, res) => {
    const { assignment } = req.query;
    try {
        const user = await userSchema.findOne({email: "tobiolea97@gmail.com"});
        const writing = user.writings.find(writing => writing.assignmentId === assignment);
        
        const assignmentDocument = await assignmentSchema.findOne({id: assignment});
        
        writing.assignment = assignmentDocument.assignment;

        res.status(200).json(writing);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

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
