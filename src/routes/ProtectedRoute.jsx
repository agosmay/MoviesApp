import React, { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate } from 'react-router-dom';



export const ProtectedRoute = ({children, url}) => {
	
	const { leerUsuario } = useContext(AuthContext);
	
	
	if(leerUsuario) {
		return children;
		
	}
	
	return <Navigate to={url} />
	
	
}




