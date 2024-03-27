import UserService from '../API/UserService';
import React, { useState } from 'react';
import Header from '../Components/Header';

export default function UserPage() {
    const [users, setUusers] = useState([]);

    async function fetchPosts() {
        const response = await UserService.getAll();
        setUusers(response.data);
    }

    return (
        <>
            <div className='.Header'>
                <Header />
            </div>
            <button onClick={fetchPosts}>GET Users</button>


        </>
    )
}