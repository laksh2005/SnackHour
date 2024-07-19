import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[],     
    },

    reducers:{
        //here below, we are mutating the state below here
        //mutating means we are just modifying the state
        //this below means that, in our reducer function, it will modify the state according to our actions
        
        //in the older version of redux (VANILLA), it was not allowed to mutate a state, and returning was find of mandatory
        //but in Redux Toolkit, it is allowed to do so, as we have done below, and returning is also not mandatory
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem:(state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length=0;
        },
    },
});



export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;