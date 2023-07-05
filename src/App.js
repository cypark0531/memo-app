import Content from './components/Content';
import CustomNavbar from './components/CustomNavbar';
import { Route, Routes } from 'react-router-dom';
import Edit from './components/Edit';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories } from './reducers/categorySlice';
import './bootstrap.min.css';
import './global.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
        <div className="container app">
          <CustomNavbar />
          <Routes >
            <Route exact path="/" element={<Content/>} />
            <Route path="/edit" element={<Edit/>}/>
          </Routes>
        </div>
  );
};

export default App;