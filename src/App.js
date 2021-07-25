import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Landing from './components/Landing';
import  main  from "./images/main.jpg";
import CreditPointsCheck from './components/CreditPointsCheck';


function App() {
  const [user, setUser] = React.useState({});

  // const getUSerData = user => setUser(user)
  const getUSerData = user =>{
    console.log('app', user);
    // setUser(user)
  } 

  return (
    <div className="App">

      <NavBar />
      {/* <Landing /> */}
      {/* <SignUp getUSerData={getUSerData} /> */}
      <CreditPointsCheck />
      <footer id="footer">
        <div className="container">
          <div className="row"></div>
        </div>
      </footer>
    </div>


  );
}

export default App;
