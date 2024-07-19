import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
}

export const isBookmarkedSlice = createSlice({
    name: "isBookmarked",
    initialState,
    reducers: {
        setIsBookmarked: (state, action) => {
            state.id = action.payload
        },
    },
});

export const { setIsBookmarked } = isBookmarkedSlice.actions;