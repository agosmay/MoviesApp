import React from 'react';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
	return (
		<>
			<h1>Page not found</h1>
			<Link to="/">Ir al inicio</Link>
		</>
	
	);
	
}