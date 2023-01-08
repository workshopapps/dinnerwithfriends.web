import React from 'react'
import { Route, Routes } from 'react-router';
import protectedRoutesData from '../protectedRoutesData';

const ProtectedRoutes = () => {
    const protectedRoutes = protectedRoutesData.map(({ path, title, element }) => {
        return <Route key={title} path={`/${path}`} element={element} />;
      });

      return <Routes>{protectedRoutes}</Routes>;
}

export default ProtectedRoutes
