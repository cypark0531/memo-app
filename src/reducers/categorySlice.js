import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
  const response = await fetch('/data/category.json');
  const data = await response.json();
  return data;
});

const categorySlice = createSlice({
  name: 'category',
  initialState: [], // Initialize state
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      // This will run when the `fetchCategories` action is dispatched and finishes successfully.
      // It will replace the current state with the fetched data.
      return action.payload;
    });
  },
});

export default categorySlice.reducer;