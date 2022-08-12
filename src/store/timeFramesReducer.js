import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataTimeFrames = createAsyncThunk(
    'getDataTimeFrames',
    async () => {
        const { data } = await axios.get('/api/data')
        return data
    }
)


const timeFramesSlice = createSlice({
    name: 'timeFrames',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDataTimeFrames.fulfilled, (state, action) => {
            state.timeframes = action.payload
        })

    }
})

export default timeFramesSlice.reducer;