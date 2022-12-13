/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [cookies] = useCookies();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(cookies);
    localStorage.setItem("jwt-token", cookies.accessToken);
    navigate("/dashboard/upcoming_events");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return;
};

export default Verify;
