/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {ProtectedRoutes, PublicRoutes} from './routes';
import "./index.css";
// import {Preferences} from "./components";
// import {PreferenceModal} from "./components/preferences/components";
import { googleCalender } from "./helpers/googleCalender";
import GoToTop from "./components/GoToTop";

googleCalender();


function App() {
  // const [isOpen, setIsOpen] = useState(false)
  // const [popup, setPopup] = useState(false)
  // const [close] = useState(false)

//   const innerFunction = useCallback(() => {
//     setIsOpen(true)
// });

// useEffect(() => {
//     innerFunction();
// }, [close]);


  const checkUserToken = () => {
    const userToken = localStorage.getItem('jwt-token')
    if (userToken || userToken !== undefined) {
      return <ProtectedRoutes />
    }
}

  return (
    <div>
      {
        checkUserToken()
      }
     <PublicRoutes />
      <GoToTop />
    </div>
  );
}

export default App;
// {isOpen && (<Preferences popup={popup} setPopup={setPopup} isOpen={isOpen} setIsOpen={setIsOpen}/>)}
// {popup && (<PreferenceModal popup={popup} setPopup={setPopup} setIsOpen={setIsOpen}/>)}
