import {createSlice} from '@reduxjs/toolkit';

const initialProfileState={
    page:'profile'
}

const profileSlice=createSlice({
    name:'profile',
    initialState:initialProfileState,
    reducers:{
        changePage(state,action){
            const page=action.payload;
            state.page=page;
        }
    }
})

export const profileActions=profileSlice.actions;
export default profileSlice.reducer;