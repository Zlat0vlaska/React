import React, { useEffect, useMemo, useState } from 'react';
import Header from './Components/Header';
import './styles/App.css';
import Blog from "./pages/Blog";
import UserPage from "./pages/UserPage";
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Likes from './Components/Likes';
function App() {


  return (
    <div className="App">
      <div className='.Header'>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Likes />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/users" element={<UserPage />} />
          </Route>

        </Routes>

      </div>
    </div>
  );
}

export default App;
