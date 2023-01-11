import React from 'react'
import {ProtectedRoutes, PublicRoutes} from './routes';
import "./index.css";
import { googleCalender } from "./helpers/googleCalender";
import GoToTop from "./components/GoToTop";
import { Route, Routes } from 'react-router';
import Error404 from "./pages/error404";

googleCalender();

function App() {

  const checkUserToken = () => {
    const userToken = localStorage.getItem('jwt-token')
    if (userToken || userToken !== undefined) {
      return <ProtectedRoutes />
    }
}

const ErrorPage = () => {
  return (<Routes>
    <Route path="*" element={<Error404 />} />
  </Routes>)
}

  return (
    <div className="App">
      {
        checkUserToken()
      }
     <PublicRoutes />
      <GoToTop />
      {
         ErrorPage()
      }
    </div>
  );
}

export default App;
