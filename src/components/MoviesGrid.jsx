import React , { useContext } from 'react';
import './stylesheets/DisplayMovies.css'
import { AuthContext } from '../context/AuthContext'
import { Link , useNavigate } from 'react-router-dom';
import { DisplayMovies } from './DisplayMovies';
import { useFetch } from '../hooks/useFetch';
import { serviceGetPopularMovies } from './services/serviceGetPopularMovies';

export const MoviesGrid = () => {
	
		const { isAuth , user , leerUsuario } = useContext(AuthContext)
	

   	const navigate = useNavigate();

	const logout = () => {
		
		localStorage.removeItem("user");
		navigate("/login") 
		
	}
	
	const { data, isLoading , error } = useFetch(serviceGetPopularMovies);
	
	
	
	
	return(
		<>
			<h1>{`Bienvenido ${leerUsuario.username}`}</h1>
			<Link to="/series">Ir a Series</Link>
			<button onClick={logout}>Log Out</button>			
			<h1 className="title">MOVIES</h1>
			<ul className="grid-container">
			{
				data.map(movie=> (
					<DisplayMovies
						key={movie.id}
						id={movie.id}
						title={movie.title}
						poster={movie.poster_path}
						overview={movie.overview}
						
						
						
					/>
				))
				
				
			}
			</ul>
			
			
		</>
	
	);



}

