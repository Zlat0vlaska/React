import UserService from '../API/UserService';
import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import PostList from '../Components/PostList';
import { Button } from '@mui/material';

export default function UserPage() {
    const [users, setUusers] = useState([]);

    async function fetchPosts() {
        const response = await UserService.getAll();
        setUusers(response.data);
    }


    useEffect(() => {
        fetchPosts();
      }, []);

    return (
        <>
            {users.map(user =>
                <div>{user.id}. {user.name}</div>
            )}
        </>
    )
}