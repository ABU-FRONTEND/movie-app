import { Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'
const Private = () => {
    const [isLogin, setIsLogin] = useState<boolean | null>(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            setIsLogin(false);
            return;
        } 
        try {
            const response = await axios.get('http://localhost:3000/login', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setIsLogin(response.status === 200);
        } catch (error) {
            console.error(error);
            
            setIsLogin(false);
        }
    }, [token]);

    if (isLogin === null) {
        return (
            <div>Loading...</div>
        )
    }
    
};

export default Private;
