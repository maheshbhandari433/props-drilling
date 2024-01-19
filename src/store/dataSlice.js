import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataRedux = createAsyncThunk(
    'data/getDataRedux', async (url) => {
        try {
            const response = await axios.get(`${url}/data`);
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
        

    }
)

const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: undefined,
        isLoading: false,
        example: "This is an example of how to use Redux Toolkit."
    },
    reducers: {
        // Internal application logic goes here.
    },
    extraReducers: (builder) => {
        builder.addCase(
            getDataRedux.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            },
            getDataRedux.pending, (state, action) => {
                state.isLoading = true;
            }
            );
        }
});

export default dataSlice.reducer;
    

