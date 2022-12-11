import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [cookies] = useCookies();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("jwt-token", cookies.accessToken);
    navigate("/dashboard/upcoming_events");
  }, []);

  return;
};

export default Verify;
