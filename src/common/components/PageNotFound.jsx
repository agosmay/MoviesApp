import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/PageNotFound.css';

export const PageNotFound = () => {
	return (
		<>
			<h1 className="warningColor">Page not found</h1>
			<Link to="/" className="warningColor">Ir al inicio</Link>
		</>
	
	);
	
}