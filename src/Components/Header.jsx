import React, { useState } from "react";
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import UserPage from "../pages/UserPage";
import Blog from "../pages/Blog";
import Likes from "./Likes";
import classes from './UI/button/MyButton.module.css';

const Header = function () {

    const [now, setNow] = useState(new Date());

    setInterval(() => setNow(new Date()), 1000);
    return (
        <header>

            <Link to="/" ><button onClick={()=>{}} className={classes.userBtn}>ГЛАВНАЯ</button></Link>
            <Link to="/blog"><button onClick={()=>{}} className={classes.userBtn}>БЛОГ</button></Link>
            <Link to="/users"><button onClick={()=>{}} className={classes.userBtn}>Пользователи</button></Link>
            <span>
                Время сейчас: {now.toLocaleTimeString()}
            </span>
            
        </header>
    );
};

export default Header;
