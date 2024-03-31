import UserService from '../API/UserService';
import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import PostList from '../Components/PostList';
import { Button } from '@mui/material';
import { TypeUser } from '../types/types';

type UserList = {
    users: TypeUser[];
};

const UserPage:React.FC<TypeUser> = () => {
    const [users, setUusers] = useState<TypeUser[]>([]);

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
                <div key={user.id}>{user.id}. {user.name}</div>
            )}
        </>
    )
}
export default UserPage;