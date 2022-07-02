import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCatsList = createAsyncThunk(

    'catList',

    async function (categry = 1) {

        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=` + categry);


        return await response.json()

    }
);

export const getCats = createAsyncThunk(

    'getCats',

    async function (categry) {
        
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=` + categry);


        return await response.json()

    }
);


export const getCatsCategory = createAsyncThunk(

    'catNav',

    async function () {

        const response = await fetch("https://api.thecatapi.com/v1/categories");

        return await response.json();

    }
);


const catListSlice = createSlice({
    name: "cat",
    initialState: {
        list: [],
        isLoading: false,
        navList: [],
        

    },


    extraReducers: {
        [getCatsList.pending]: (state) => {
            state.isLoading = true;

        },

        [getCatsList.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.list = action.payload;
         
        },

        [getCats.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.list = [...state.list, ...action.payload];

        },

        [getCatsCategory.fulfilled]: (state, action) => {
            state.navList = action.payload;
        }


    }


});


export const catListReducer = catListSlice.reducer
