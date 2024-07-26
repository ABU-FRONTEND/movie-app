import { configureStore } from "@reduxjs/toolkit";
import { searchValueSlice } from "./reducers/searchValue";
export const store = configureStore({
    reducer: {
        searchValue: searchValueSlice.reducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
