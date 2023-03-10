/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Verify = () => {
  const [cookies] = useCookies(["accessToken", "refreshToken"]);
  console.log(cookies)
  const navigate = useNavigate();
  useEffect(() => {
    console.log(cookies)
    localStorage.setItem("jwt-token", cookies["accessToken"]);
    navigate("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return;
};

