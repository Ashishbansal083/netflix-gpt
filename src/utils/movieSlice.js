import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlyingmovie:null,
        movieTrailervedio:null,
        Populermovies:null,
    },
    reducers:{
        addNowplayingMovies:(state,action)=>{
            state.nowPlyingmovie=action.payload;
        },
        addmovieTrailervedio:(state,action)=>{
            state.movieTrailervedio=action.payload;
        },
        addPopulermovie:(state,action)=>{
            state.Populermovies=action.payload;
        }
    }
})

export const {addNowplayingMovies,addmovieTrailervedio,addPopulermovie} = movieSlice.actions;

export default movieSlice.reducer;

