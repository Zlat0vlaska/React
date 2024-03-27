import React, { useEffect, useMemo, useState } from 'react';
import Header from './Components/Header';
import './styles/App.css';
import Blog from "./pages/Blog";
import UserPage from "./pages/UserPage";
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <div className='.Header'>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/users" element={<UserPage />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
