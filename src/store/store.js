import {configureStore} from '@reduxjs/toolkit';
import { catListReducer } from './CatListSlice';


const store = configureStore({
    reducer: {
        
        catList: catListReducer,
    }
});




export default  store;