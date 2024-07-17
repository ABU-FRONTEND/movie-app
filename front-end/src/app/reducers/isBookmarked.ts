import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isBookmarked: false
}

export const isBookmarkedSlice = createSlice({
    name: "isBookmarked",
    initialState,
    reducers: {
        setIsBookmarked: (state) => {
            state.isBookmarked = !state.isBookmarked
        },
    },
});

export const { setIsBookmarked } = isBookmarkedSlice.actions;