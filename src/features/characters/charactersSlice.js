import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//initial state
const initialState = {
loading: false,
characters: [],
error: '',
}

// GENERATES PENDING, FULFILLED AND REJECTED ACTION TYPES
export const fetchCharacters = createAsyncThunk('user/fetchUsers', () => {
    return axios
    .get('https://api.disneyapi.dev/characters')
    .then( (response) => response.data?.data )    
})

export const characterSlice = createSlice({
    name: "character",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(fetchCharacters.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.loading = false
            state.characters = action.payload
            state.error = ""
        })
        builder.addCase(fetchCharacters.rejected, (state, action) => {
            state.loading = false
            state.characters = []
            state.error = action.error.message
        })    
    },
});

export default characterSlice.reducer;

