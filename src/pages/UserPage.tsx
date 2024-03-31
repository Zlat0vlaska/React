import UserService from '../API/UserService';
import React, { useState, useEffect } from 'react';
import { TypeUser } from '../types/types';


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