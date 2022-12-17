import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : null,
    description : null,
    price : null,
}

export const navSlice = createSlice(
    {
        name: 'nav',
        initialState,
        reducers: {
            setName : (state, action) => {
                state.name = action.payload;
            },
            setDescription: (state, action) => {
                state.description = action.payload;
            },
            setPrice: (state, action) => {
                state.price = action.payload;
            }
        }
    }
);

export const {setName, setDescription, setPrice} = navSlice.actions;

//selectors
export const selectName = (state) => state.nav.name;
export const selectDescription = (state) => state.nav.description;
export const selectPrice = (state) => state.nav.price;

export default navSlice.reducer;