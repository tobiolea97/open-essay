import { getLevels, getWritingAreas, getAssignment } from '../controller/controller.js';

export const mongoEndpoints = (app) => {
    app.get('/data/levels', getLevels);
    app.get('/data/writing-areas', getWritingAreas);
    app.get('/data/assignment', getAssignment);
}