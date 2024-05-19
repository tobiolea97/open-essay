import { getLevels, getWritingAreas, getWritings } from '../controller/controller.js';

export const mongoEndpoints = (app) => {
    app.get('/data/levels', getLevels);
    app.get('/data/writing-areas', getWritingAreas);
    // app.get('/data/assignment', getAssignment);
    // app.post('/data/saveWriting', saveWriting);
    //app.get('/data/getWriting', getWriting);
    app.get('/data/getWritings', getWritings);
}