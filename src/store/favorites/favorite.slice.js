import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            const recipe = action.payload;
            const isExist = state.some(r => r.id === recipe.id);
            if (isExist) {
                state = state.filter(r => r.id ===recipe.id  )
            }

        }
    }
})