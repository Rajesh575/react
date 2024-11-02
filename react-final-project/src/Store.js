import { configureStore, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice ({
    name:'products',
    initialState:{ veg:[
        {name:'Tomato',price:250.00},
        {name:'potato',price:200.00},
        {name:'chinthapandu' , price:150.5 }
    ],
    nonveg:[
        {name:'chicken',price:250.00},
        {name:'mutton',price:300.00},
    ],
},
    reducers:{}
});

const cartslice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const status = state.find(item=>item.name===action.payload.name);
            if(status){
                status.quantity +=1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }
        },
    
    removeFromCart: (state, action) =>
        state.filter((item) => item.name !== action.payload.name),
    //   clearCart: () => [],
      incrementQuantity: (state, action) => {
        const item = state.find((item) => item.name === action.payload.name);
        if (item) item.quantity += 1;
      },
      decrementQuantity: (state, action) => {
        const item = state.find((item) => item.name === action.payload.name);
        if (item) {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            return state.filter((cartItem) => cartItem.name !== item.name);
          }
        }
    },}
});
export const{addToCart,removeFromCart,incrementQuantity,decrementQuantity} = cartslice.actions;

const store=configureStore({
    reducer:
             {products:productsSlice.reducer,
              cart:cartslice.reducer}
})
export default store;
// export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity,clearCart,} = cartSlice.actions;