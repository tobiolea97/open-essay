import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    sentMessage: null,
    writingReview: null,
    status: "idle",
    error: ""
};

export const review = createAsyncThunk('/essay/review', async (production) => {
        let response;
        let request = {
            "message": production
        };
        try {
            response = await fetch('http://localhost:3000/review', {
            //response = await fetch('http://localhost:3000/review/this/is/the/paid/version/bro', {
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
    reducers: {
        storeMessage: (state, action) => {
            state.sentMessage = action.payload;
        },
        setStatus: (state, action) => {
            status = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(review.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(review.fulfilled, (state, action) => {
                state.writingReview = applyStylesToErrors(action.payload);
                state.status = 'succeeded';
            })
            .addCase(review.rejected, (state, action) => {
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
            element = element.replace(misspelling.wrong, `<wrong>${misspelling.wrong}</wrong> <right>${misspelling.correct}</right>`);
        });
        styledParagraphs.push(element);
    });
    writingReview.original = styledParagraphs;
    return writingReview;
}

export const { storeMessage, setStatus } = reviewSlice.actions;
export const selectReviewStatus = (state) => state.status;

export default reviewSlice.reducer;