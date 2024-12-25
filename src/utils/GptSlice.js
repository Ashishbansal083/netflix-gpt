import { createSlice } from "@reduxjs/toolkit";


const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        GptSearchView:false,
        movieResult:null,
        searchMovieName:null,
    },
    reducers:{
        togleGptSearchView(state,action){
            state.GptSearchView=!state.GptSearchView  ;      
        },
        addgptMovieResults(state,action){
            const {movieNames,searchResults}=action.payload;
            state.movieResult=searchResults;
            state.searchMovieName=movieNames;
        }

    }
})

export  const {togleGptSearchView} = GptSlice.actions;

export default GptSlice.reducer;