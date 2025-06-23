import {createSlice } from "@reduxjs/toolkit"
const cart=createSlice(
    {
        name:'cartslice',
        initialState:{
            items:[]
        },
        reducers:{
            addItems:(state,actions)=>{
                state.items.push({...actions.payload,quantity:1})

            },
            IncrementItems:(state,actions)=>{
                 const element=state.items.find((item)=>item.id===actions.payload.id);
                element.quantity++;

        },
        DecrementItems:(state,actions)=>{ 
            const element=state.items.find((item)=>item.id===actions.payload.id);
            if(element.quantity>1){
                element.quantity--;}
                else{
                    state.items=state.items.filter((item)=>item.id!==actions.payload.id)}

        }
    }}
)
export const{addItems,IncrementItems,DecrementItems}=cart.actions;
export default cart.reducer;