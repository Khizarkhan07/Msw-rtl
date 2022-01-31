import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }: any) {
    const auth = localStorage.getItem("is-authenticated")
    return auth ? children : <Navigate to="/" />;
  }

export default PrivateRoute;