import { createSlice } from "@reduxjs/toolkit";

export const responseDataSlice = createSlice({
    name: "responseData",
    initialState: {
        data: null
    },
    reducers: {
        setIResponseData: (state, action) => {
            state.data = action.payload
        },
    },
});

export const { setIResponseData } = responseDataSlice.actions;