import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';

import { Results } from './Results';
import { Search } from './Search';

export const Routing = () => {
  return (
    <div className='p-4'>
        <Routes>
          <Route path='/' element={<Search />} />
          {/**Routing multiple routes o one component */}
          {['search', 'images', 'news', 'videos'].map(path => <Route path={path} element={<Results />} />)}
          
        </Routes>
    </div>
  )
}

//export default Routes
