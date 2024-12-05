import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlyingmovie:null,
    },
    reducers:{
        addNowplayingMovies:(state,action)=>{
            state.nowPlyingmovie=action.payload;
        }
    }
})

export const {addNowplayingMovies} = movieSlice.actions;

export default movieSlice.reducer;

