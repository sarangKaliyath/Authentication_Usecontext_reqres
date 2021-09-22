import logo from './logo.svg';
import './App.css';
import { Form } from "./components/Form";
import { SuccessPage } from './components/SuccessPage';
import { useContext } from 'react';
import { AuthContext } from "./Context/AuthContext";

function App() {

  const { auth,loading} = useContext(AuthContext);

  return (
    <div className="App">
      {auth? (loading?<h1>....Loading</h1>:<SuccessPage/>):<Form/>}
    </div>
  );
}

export default App;
