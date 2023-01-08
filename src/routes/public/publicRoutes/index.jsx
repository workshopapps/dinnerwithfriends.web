import React from 'react'
import { Route, Routes } from 'react-router';

const publicRoutes = () => {
    const publicRoutes = routesData.map(({ path, title, element }) => {
        return <Route key={title} path={`/${path}`} element={element} />;
      });

      return <Routes>{publicRoutes}</Routes>;
}

export default publicRoutes
