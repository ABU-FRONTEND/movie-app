import { Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'
import { RootState } from '../app/store';
const Private: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean | null>(null);
    const token = localStorage.getItem('token');
    const isBookmarked = useSelector((state: RootState) => state.isBookmarkedSlice.id);
    console.log(isBookmarked);
    
     useEffect(() => {
       const verifyToken = async () => {
        if (!token) {
            setIsLogin(false);
            return;
        } 
        try {
            const response = await axios.get('http://localhost:3000/auth/check', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                
            })
            console.log(response)
            
            setIsLogin(response.status === 200);                        
        } catch (error) {
            console.error(error);
            
            setIsLogin(false);
        }
        
        
       }

       verifyToken();
    }, [isBookmarked]);

    if (isLogin === null) {
        return (
            <div></div>
        )
    }
    

    return isLogin ? <Outlet /> : <Navigate to="/login" />

};

export default Private;
