import React from 'react';
import { useForm } from '../../common/hooks/useForm' 
import './stylesheets/Login.css'
import { RiStarSFill } from 'react-icons/ri';

export const Login = ()=> {

	const  {  handleChange, handleSubmit , username, password , user , setUser } = useForm();
	

	
	
	return (
	
		<>	
			<div className="container-app-description">
				<h1 className="first-title">Welcome to the Rating App!</h1>
				<h1 className="title-description">Check out your favourite movies and tv shows!</h1>
			</div>
			<div className="container-icons">
				<h1 className="icon"><RiStarSFill /></h1>
				<h1 className="icon"><RiStarSFill /></h1>
				<h1 className="icon"><RiStarSFill /></h1>
				<h1 className="icon"><RiStarSFill /></h1>
				<h1 className="icon"><RiStarSFill /></h1>
			</div>
		
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



