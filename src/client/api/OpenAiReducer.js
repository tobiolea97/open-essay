import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    result: {},
    status: "idle",
    error: ""
};

export const review = createAsyncThunk('/essay/review', async (production) => {
        debugger;
        let response;
        let request = {
            "message": production
        };
        try {
            response = await fetch('http://localhost:3000/review', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(request)
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

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(review.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(review.fulfilled, (state, action) => {
                debugger;
                state.status = 'succeeded';
                state.token = action.payload;
            })
            .addCase(review.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export default reviewSlice.reducer;