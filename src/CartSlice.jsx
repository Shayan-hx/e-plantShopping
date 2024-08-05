// CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []  // Initialize with an empty array or default cart items
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(i => i.name === item.name);

            if (existingItem) {
                existingItem.quantity += 1;  // Increase quantity if item already exists
            } else {
                state.items.push({ ...item, quantity: 1 });  // Add new item with quantity 1
            }
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const item = state.items.find(i => i.name === name);
            if (item) {
                item.quantity = quantity;  // Update the quantity of the item
            }
        },
        removeItem: (state, action) => {
            const name = action.payload;
            state.items = state.items.filter(i => i.name !== name);  // Remove item by name
        }
    }
});

export const { addItem, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
