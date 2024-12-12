import { createSlice } from "@reduxjs/toolkit";


const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        GptSearchView:false,
    },
    reducers:{
        togleGptSearchView(state,action){
            state.GptSearchView=!state.GptSearchView  ;      
        }
    }
})

export  const {togleGptSearchView} = GptSlice.actions;

export default GptSlice.reducer;