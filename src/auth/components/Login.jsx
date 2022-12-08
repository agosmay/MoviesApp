import React from 'react';
import { useForm } from '../../common/hooks/useForm' 
import './stylesheets/Login.css'

export const Login = ()=> {

	const  {  handleChange, handleSubmit , username, password , user , setUser } = useForm();
	

	
	
	return (
	
		<>	
		
			<div className="contenedorLogin">
				<p className="tituloLogin">Sign in with your account</p>
				<form onSubmit={handleSubmit} autoComplete="off">
					<div className="contenedorInput">
						<label htmlFor="username" className="labelStyle">Username</label>
						<input type="text" id="username" className="inputStyle" name="username" onChange={handleChange} value={username} required/>
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



