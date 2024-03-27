import UserService from '../API/UserService';
import React, { useState } from 'react';

export default function UserPage(){
    const [users, setUusers] = useState([]);
    
    async function fetchPosts() {
        const response = await UserService.getAll();
        console.log(response.data);
      }
    
    return(
        <>
            <button onClick={fetchPosts}>GET Users</button>

           
        </>
    )
}