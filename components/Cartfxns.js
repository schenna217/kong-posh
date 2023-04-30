import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name:"Cart",
    initialState:{
        cart: [],
    },
    reducers:{
        addCart: (action, state) => {
            state.cart.push({action,payload,quantity: 1})
        },
        removeFromCart: (action, state) => {
            const removeFromCart = state.cart.filter((item) => item.id != action.payload,id)
        }
    }
})


export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducers;