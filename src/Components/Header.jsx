import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import UserPage from "../pages/UserPage";
import Blog from "../pages/Blog";

const Header = function () {

    const [now, setNow] = useState(new Date());

    setInterval(() => setNow(new Date()), 1000);
    return (
        <header>
            {/* <h3>SITE</h3> */}

            <Link to="/" >ДАМОЙ</Link>
            <Link to="/blog">БЛОГ</Link>
            <Link to="/users">Пользователи</Link>

            <Routes>
                <Route path="/" />
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/users" element={<UserPage/>}/>
                <Route path="*"/>
            </Routes>
            <span>
                Время сейчас: {now.toLocaleTimeString()}
            </span>
        </header>

    );
};

export default Header;
