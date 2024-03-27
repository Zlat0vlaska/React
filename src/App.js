import React, { useEffect, useMemo, useState } from 'react';
import Header from './Components/Header';
import PostList from './Components/PostList';
import './styles/App.css';
import PostForm from './Components/PostForm';
import PostFilter from './Components/PostFilter';
import MyModal from './Components/MyModal/MyModal';
import MyButton from './Components/UI/button/MyButton';
import { Button } from '@mui/material';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';



function App() {
 

  return (
    <div className="App">
    <div className='.Header'>
        <Header />
      </div>
    </div>
  );
}

export default App;
