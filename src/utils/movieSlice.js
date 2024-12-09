import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlyingmovie:null,
        movieTrailervedio:null,
        Populermovies:null,
        Topratedmovies:null,
        Upcomingmovies:null,
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
        },
        addTopratedmovie:(state,action)=>{
            state.Topratedmovies=action.payload;
        },
        addUpcomingmovie:(state,action)=>{
            state.Upcomingmovies=action.payload;
        }
    }
})

export const {addNowplayingMovies,addmovieTrailervedio,addPopulermovie,addTopratedmovie,addUpcomingmovie} = movieSlice.actions;

export default movieSlice.reducer;

