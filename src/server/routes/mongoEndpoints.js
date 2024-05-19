import { getLevels, getWritingAreas } from '../controller/controller.js';

export const mongoEndpoints = (app) => {
    app.get('/data/levels', getLevels);
    app.get('/data/writing-areas', getWritingAreas);
}