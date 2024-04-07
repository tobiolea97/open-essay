import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    levels: null,
    writingAreas: null,
    currentAssignment: null,
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
    try {
            response = await fetch('http://localhost:3000/data/assignment?level=' + params.level + '&writingArea=' + params.writingArea, {
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
            });
    }
});

//export const { storeMessage, setStatus } = reviewSlice.actions;
//export const selectReviewStatus = (state) => state.status;

export default dataSlice.reducer;