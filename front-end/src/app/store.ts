import { configureStore } from "@reduxjs/toolkit";
import { isBookmarkedSlice } from "./reducers/isBookmarked";
export const store = configureStore({
    reducer: {
        isBookmarkedSlice: isBookmarkedSlice.reducer
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
