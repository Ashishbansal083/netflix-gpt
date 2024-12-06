import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlyingmovie:null,
        movieTrailervedio:null,
    },
    reducers:{
        addNowplayingMovies:(state,action)=>{
            state.nowPlyingmovie=action.payload;
        },
        addmovieTrailervedio:(state,action)=>{
            state.movieTrailervedio=action.payload;
        }
    }
})

export const {addNowplayingMovies,addmovieTrailervedio} = movieSlice.actions;

export default movieSlice.reducer;

