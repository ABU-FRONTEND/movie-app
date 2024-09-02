import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'
type Props = {
    children: React.ReactNode
  }  
const PrivateRoute: React.FC<Props> = ({children}) => {
    const [isLogin, setIsLogin] = useState<boolean | null>(null);
    const token = localStorage.getItem('token');
    
     useEffect(() => {
       const verifyToken = async () => {
        if (!token) {
            setIsLogin(false);
            return;
        } 
        try {
            const response = await axios.get('https://movie-app-backend-2.onrender.com/auth/check', {
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
    }, [token]);

    if (isLogin === null) {
        return (
            <div></div>
        )
    }
    

    return isLogin ? children : <Navigate to="/login" />

};

export default PrivateRoute;
