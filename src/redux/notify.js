import {createSlice} from '@reduxjs/toolkit';

const initialNotfifyState={
    isSucces:null
};

const notifySlice=createSlice({
    name:'nofify',
    initialState:initialNotfifyState,
    reducers:{
        succes(state){
            state.isSucces=true;
            setTimeout(()=>{
                state.isSucces=null
            },2500)
        },
        fail(state){
            state.isSucces=false;
            
        },
        noNotify(state){
            state.isSucces=null;
        }
    }
});

export const notifyActions=notifySlice.actions;
export default notifySlice.reducer;