
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

export  function SuccessPage() {

    const { token, auth, setAuth } = useContext(AuthContext);

    return (
        <div>
            <h2>Login Success</h2>
            <h3>Token:{token}</h3>
            <div>
                <button onClick={()=>{setAuth(false)}}>Logout</button>
            </div>
        </div>
        
    )
}
