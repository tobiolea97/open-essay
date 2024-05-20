import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    levels: null,
    writingAreas: null,
    writing: null,
    currentAssignment: null,
    currentReview: null,
    status: "idle",
    error: ""
};

export const getLevels = createAsyncThunk('levels/fetch', async () => {
    let response;
    try {
            response = await fetch('http://localhost:3000/data/levels', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            throw new Error('Server error. Try again later.');
        }
        if (!response.ok) {
            throw new Error('Server error. Try again later.');
        }
        return response.json();
    }
);

export const getWritingAreas = createAsyncThunk('writingAreas/fetch', async () => {
    let response;
    try {
            response = await fetch('http://localhost:3000/data/writing-areas', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            throw new Error('Server error. Try again later.');
        }
        if (!response.ok) {
            throw new Error('Server error. Try again later.');
        }
        return response.json();
    }
);

export const getAssignment = createAsyncThunk('assignment/get', async (params) => {
    let response;
    const token = localStorage.getItem('token');
    try {
            response = await fetch('http://localhost:3000/data/assignment?level=' + params.level + '&writingArea=' + params.writingArea, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
        } catch (error) {
            throw new Error('Server error. Try again later.');
        }
        if (!response.ok) {
            throw new Error('Server error. Try again later.');
        }
        return response.json();
    }
);

export const saveWriting = createAsyncThunk('writing/save', async (params) => {
    let response;
    try {
        response = await fetch('http://localhost:3000/data/saveWriting', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params)
        });
    } catch (error) {
        throw new Error('Server error. Try again later.');
    }
    return response.json();
});

export const getReview = createAsyncThunk('review/get', async(params) => {
    let response;
    const token = localStorage.getItem('token');
    try {
        response = await fetch('http://localhost:3000/data/getWriting?assignment=' + params.assignmentId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        throw new Error('Server error. Try again later.');
    }
    if (!response.ok) {
        throw new Error('The writing code does not exist.');
    }
    return response.json();
});

export const getWritings = createAsyncThunk('writings/get', async(params) => {
    let response;
    const token = localStorage.getItem('token');
    try {
        response = await fetch('http://localhost:3000/data/getWritings', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        throw new Error('Server error. Try again later.');
    }
    return response.json();
});

const dataSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        storeAssignment: (state, action) => {
            state.currentAssignment = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLevels.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getLevels.fulfilled, (state, action) => {
                state.levels = action.payload;
                state.status = 'succeeded';
            })
            .addCase(getLevels.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getWritingAreas.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getWritingAreas.fulfilled, (state, action) => {
                state.writingAreas = action.payload;
                state.status = 'succeeded';
            })
            .addCase(getWritingAreas.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getAssignment.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAssignment.fulfilled, (state, action) => {
                state.currentAssignment = action.payload;
                state.status = 'succeeded';
            })
            .addCase(getAssignment.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getReview.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getReview.fulfilled, (state, action) => {
                let review = action.payload;
                review.feedback = applyStylesToErrors(review.feedback);
                state.currentReview = review;
                state.status = 'succeeded';
            })
            .addCase(getReview.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getWritings.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getWritings.fulfilled, (state, action) => {
                state.writings = action.payload;
                state.status = 'succeeded';
            })
            .addCase(getWritings.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

    }
});

function applyStylesToErrors(writingReview) {
    let paragraphs = writingReview.original;
    let misspellings = writingReview.misspellings;
    // remove duplicates from misspellings
    misspellings = misspellings.filter((v, i, a) => a.findIndex(t => (t.wrong === v.wrong)) === i);
    let styledParagraphs = [];
    paragraphs.forEach(element => {
        misspellings.forEach(misspelling => {
            element = element.replace(misspelling.wrong, `<div class='wrong'>${misspelling.wrong}</div> <div class='right'>${misspelling.correct}</div>`);
        });
        styledParagraphs.push(element);
    });
    writingReview.original = styledParagraphs;
    return writingReview;
}

export const { storeAssignment } = dataSlice.actions;

export default dataSlice.reducer;