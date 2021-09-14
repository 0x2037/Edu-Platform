import { createSlice } from "@reduxjs/toolkit";
const initialShopState={
    selectedBenefits:[],
    totalSelectedBenefits:0,
    totalPrice:0
}

const shopSlice=createSlice({
    name:'shop',
    initialState:initialShopState,
    reducers:{
        selectBenefit(state,action){
            const newBenefit=action.payload;
            state.totalSelectedBenefits++;
            state.totalPrice=state.totalPrice+newBenefit.price;
            state.selectedBenefits.push({
                id:newBenefit.id,
                name:newBenefit.name,
                price:newBenefit.price
            })
        }
    }
})

export const shopActions=shopSlice.actions;
export default shopSlice.reducer;