import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './../pages/Home.jsx';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails.jsx';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultsList from './../pages/SearchResultsList';


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/tours/:id' element={<TourDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/tours/search' element={<SearchResultsList />} />
    </Routes>
  )
}

export default Routers
