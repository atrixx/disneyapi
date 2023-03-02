import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   modalShow: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
      show: (state) => { state.modalShow(true)},
    }
})

export default modalSlice.reducer
export const { show } = modalSlice.actions