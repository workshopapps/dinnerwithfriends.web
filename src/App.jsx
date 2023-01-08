import {ProtectedRoutes} from './routes';
import {PublicRoutes} from './routes'
import ProtectedRoute from './util/ProtectedRoute';
import "./index.css";
import { googleCalender } from "./helpers/googleCalender";
import GoToTop from "./components/GoToTop";
// import { useState } from "react";
// import { useEffect } from "react";

googleCalender();

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // const checkUserToken = () => {
  //     const userToken = localStorage.getItem('jwt-token')
  //     if (!userToken || userToken === undefined) {
  //       setIsLoggedIn(false)
  //     }
  //     setIsLoggedIn(true)
  // }

  // useEffect(() => {
  //   checkUserToken()
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLoggedIn]);

  return (
    <div className="App">
      <PublicRoutes />
      <ProtectedRoute>
        <ProtectedRoutes />
      </ProtectedRoute>
      <GoToTop />
    </div>
  );
}

export default App;
