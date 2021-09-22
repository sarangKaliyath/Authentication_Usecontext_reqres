import { useContext,useState } from "react";
import { AuthContext } from '../Context/AuthContext';
import { Login } from './Login';
import '../App.css'

export function Form() {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const { token, setToken, auth, setAuth,setLoading } = useContext(AuthContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        Login({ email, password }).then((res) => {
            setToken(res.data.token);
            setLoading(false);
            console.log(token);
            setAuth(true);
        
        }).catch(err => {
            setAuth(false);
            alert("Invalid Login Details")
        })
    }
    return (
        <div className="alignForm">
        <form onSubmit={handleSubmit} className="alignInput">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <input type="submit" placeholder="submit" />
        </form>
      </div>
    );
}