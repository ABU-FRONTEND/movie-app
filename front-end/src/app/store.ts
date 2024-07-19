import { configureStore } from "@reduxjs/toolkit";
import { isBookmarkedSlice } from "./reducers/isBookmarked";
import { searchValueSlice } from "./reducers/searchValue";
import { responseDataSlice } from "./reducers/IResponseData";
export const store = configureStore({
    reducer: {
        isBookmarkedSlice: isBookmarkedSlice.reducer,
        searchValue: searchValueSlice.reducer,
        responseData: responseDataSlice.reducer
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
