import React , { useContext , useState } from 'react';
import './stylesheets/DisplayMovies.css'
import { AuthContext } from '../../../auth/context/AuthContext'
import { Link , useNavigate } from 'react-router-dom';
import { DisplayMovies } from './DisplayMovies';
import { useFetch } from '../../../common/hooks/useFetch';
import { serviceGetPopularMovies } from '../service/serviceGetPopularMovies';

export const MoviesGrid = () => {
	
		const { isAuth , user , leerUsuario } = useContext(AuthContext)
	

   	const navigate = useNavigate();

	const logout = () => {
		
		localStorage.removeItem("user");
		navigate("/login") 
		
	}
	
	const { data, isLoading , error } = useFetch(serviceGetPopularMovies);
	
	const [counter, setCounter]= useState(1)
	
	const atras = ()=> {
		if(counter<=1){
			setCounter(1)
		}else{
			setCounter(counter-1)
		}
	}
	
	
	const siguiente = () => {
		setCounter(counter +1)
		
	}
	
	
	
	
	return(
		<>
			<h1>{`Bienvenido ${leerUsuario.username}`}</h1>
			<Link to="/series">Ir a Series</Link>
			<button onClick={logout}>Log Out</button>			
			<h1 className="title">MOVIES</h1>
			<button type="button" onClick={atras}>Atras</button><span>{counter}</span><button type="button" onClick={siguiente}>SIGUIENTE</button>
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


