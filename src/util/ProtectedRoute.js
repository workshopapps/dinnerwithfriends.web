import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router'

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const checkUserToken = () => {
        const userToken = localStorage.getItem('jwt-token')
        if (!userToken || userToken === undefined) {
          setIsLoggedIn(false)
          return navigate('/sign_in')
        }
        setIsLoggedIn(true)
    }

    useEffect(() => {
      checkUserToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

  return (
    <>
     {
        isLoggedIn ? children : null
     }
    </>
  )
}

export default ProtectedRoute
