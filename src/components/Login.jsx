import React from 'react';
import { useForm } from '../hooks/useForm' 
import './stylesheets/Login.css'

export const Login = ()=> {

	const  {  handleChange, handleSubmit , email, password , user , setUser } = useForm();
	

	
	
	return (
	
		<>	
		
			<div className="contenedorLogin">
				<p className="tituloLogin">Sign in with your account</p>
				<form onSubmit={handleSubmit}>
					<div className="contenedorInput">
						<label htmlFor="email" className="labelStyle">Email Adress</label>
						<input type="email" id="email" className="inputStyle" name="email" onChange={handleChange} value={email} required/>
					</div>
					<div className="contenedorInput">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" className="inputStyle" name="password"  onChange={handleChange} value={password} required />
					</div>
					<div className="botonera">
						<button type="submit" className="buttonSignIn">Sign in</button>
					</div>
				</form>
			</div>

			
			
		</>
	
	);
	
	
}



