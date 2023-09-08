import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchdata = createAsyncThunk("data", async () => {
    return await axios.get('https://student-api.mycodelibraries.com/api/student/get').then((res) => {
        return res.data.data
    })
})

const users = createSlice({
    name: 'user',
    initialState: [4, 1, 2, 3],
    reducers: {
        addUser(state, action) {
            return action.payload
        },
        getUser(state, action) {
            return [1, 2, 3]
        },
        deleteUser(state, action) {
            return [1, 2, 3]
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchdata.fulfilled, (state, action) => {
            return action.payload
        })
    }
})
export default users.reducer
export const { addUser } = users.actions