import { createSlice } from "@reduxjs/toolkit";


const loaderSlice = createSlice({
    name: 'loader',

    initialState : {
        loading: false
    },

    reducers:{
        showLoading: (state) => {
            state.loading = true
        },

        hideLoading: (state) => {
            state.loading = false
        }
    }
})

// eslint-disable-next-line no-unused-vars
const {showLoading, hideLoading} = loaderSlice.actions
export default loaderSlice.reducer;