import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "global",
    initialState: {
        followerSize: 0,
    },
    reducers: {
        setFollowerSize: (state, action) => {
            state.followerSize = action.payload;
        },
    }
})

export const {setFollowerSize} = globalSlice.actions;
export default globalSlice.reducer;