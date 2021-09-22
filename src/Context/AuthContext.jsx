import { createContext,useState } from "react";

export const AuthContext = createContext("");

function Auth({children}) {
    
    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState("");
    const [loading, setLoading] = useState(true);

    const value = { token, auth,loading ,setLoading, setToken, setAuth };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default Auth