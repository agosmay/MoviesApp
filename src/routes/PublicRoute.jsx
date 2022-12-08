import React , { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../auth/context/AuthContext'

export const PublicRoute = ({ children, url }) => {
	
	

	const { leerUsuario } = useContext(AuthContext);

  if (leerUsuario) {
    return <Navigate to={url} />;
  }
  return children;
};



