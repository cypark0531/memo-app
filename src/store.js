import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './reducers/categorySlice'; // Import your reducer(s)

const store = configureStore({
    reducer: {
      category: categoryReducer, // Add your reducer(s) to the store
      // Add more reducers if needed
    },
  });

  export default store;
  