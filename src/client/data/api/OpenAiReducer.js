import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    sentMessage: null,
    writingReview: null,
    status: "idle",
    error: ""
};

export const review = createAsyncThunk('/essay/review', async (params) => {
        let response;
        const token = localStorage.getItem('token');
        try {
            response = await fetch('http://localhost:3000/review/test', {
            /* response = await fetch('http://localhost:3000/review/openai', { */
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    "message": params.inputValue
                })
            });
        } catch (error) {
            throw new Error('Server error. Try again later.');
        }

        if (!response.ok) {
            throw new Error('Server error. Try again later.');
        }

        let feedback = await response.json();
        debugger;
        let writing = {
            "writing": params.inputValue,
            "assignmentId": params.assignmentId,
            "feedback": feedback
        }
        try {
            await fetch('http://localhost:3000/data/saveWriting', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(writing)
            });
        } catch (error) {
            throw new Error('Server error. Try again later.');
        }
        return params.assignmentId;
    }
);

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        storeMessage: (state, action) => {
            state.sentMessage = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(review.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(review.fulfilled, (state, action) => {
                //state.writingReview = applyStylesToErrors(action.payload);
                //state.currentAssignment = action.payload;
                state.status = 'succeeded';
            })
            .addCase(review.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});



export const { storeMessage, setStatus } = reviewSlice.actions;
export const selectReviewStatus = (state) => state.status;

export default reviewSlice.reducer;