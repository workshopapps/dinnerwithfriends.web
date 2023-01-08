import React from 'react'
import { Route, Routes } from 'react-router';
import publicRoutesData from '../publicRoutesData';

const PublicRoutes = () => {
    const publicRoutes = publicRoutesData.map(({ path, title, element }) => {
        return <Route key={title} path={`/${path}`} element={element} />;
      });

      return <Routes>{publicRoutes}</Routes>;
}

export default PublicRoutes
