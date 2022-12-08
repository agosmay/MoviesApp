import React , { useState , useContext } from 'react';
import { loginForm } from './loginForm'
import { AuthContext } from '../../auth/context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const useForm = () => {
	const navigate = useNavigate();
		
	const [input, setInput] = useState(loginForm)
	
	const { username , password } = input;
	
	const { isAuth, setIsAuth, setUser , user } = useContext(AuthContext)
	
	const handleChange = (e) => {
		const {name, value} = e.target;
		
		setInput({
			
			...input,
			[name]: value
			
		})	
	}
	
	const handleSubmit = (e) => {
		
		e.preventDefault();
		
		const userLogged = {
			id: Date.now(),
			token: "1234",
			username: username,
			password : password
		}
	
	
		setUser(userLogged)
		setIsAuth(true)
		localStorage.setItem('user', JSON.stringify(userLogged))

	
		
		navigate("/movies", {
			
			replace: true
		})
		
		
		
		
		
	}
	
	return  { handleChange, handleSubmit , username , password , user , setUser }



}	
	