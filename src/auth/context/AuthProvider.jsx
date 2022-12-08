import React , { useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false)
	const [user, setUser] = useState({})
	
	const leerUsuario = JSON.parse(localStorage.getItem('user'))

	

	
	return (
		<>
			<AuthContext.Provider value={{
				isAuth,
				setIsAuth,
				user,
				setUser,
				leerUsuario,
				
				
			}}>
			{children}
			</AuthContext.Provider>
		</>
	
	);
	
	
}