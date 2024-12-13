import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
    name:"config",
    initialState:{
        lang_key:"en"
    },
    reducers:{
        changeLanguage(state,action){
            state.lang_key=action.payload;
        },
    }
});

export const {changeLanguage} = LanguageSlice.actions;

export default LanguageSlice.reducer;