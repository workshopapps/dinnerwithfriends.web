import React from 'react'
import {ProtectedRoutes, PublicRoutes} from './routes';
import "./index.css";
import { googleCalender } from "./helpers/googleCalender";
import GoToTop from "./components/GoToTop";

googleCalender();


function App() {

  const checkUserToken = () => {
    const userToken = localStorage.getItem('jwt-token')
    if (userToken || userToken !== undefined) {
      return <ProtectedRoutes />
    }
}

  return (
    <div className="App">
      {
        checkUserToken()
      }
     <PublicRoutes />
      <GoToTop />
    </div>
  );
}

export default App;
