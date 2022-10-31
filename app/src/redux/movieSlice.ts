import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "movie",
    initialState: {
        movie: null,
    },
    reducers: {
        offlineMovie(state, { payload }) {
            return { ...state, movie: payload };
        },
    },
});

export const { offlineMovie } = slice.actions;

export const selectorMovie = (state) => state.movie;

export default slice.reducer;
