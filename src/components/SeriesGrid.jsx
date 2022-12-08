import React , { useContext } from 'react';
import './stylesheets/DisplaySeries.css'
import { AuthContext } from '../context/AuthContext'
import { Link , useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { DisplaySeries } from './DisplaySeries';
import { serviceGetPopularSeries } from './services/serviceGetPopularSeries';



export const SeriesGrid = () => {
	
		const { isAuth , user , leerUsuario } = useContext(AuthContext)
	

   	const navigate = useNavigate();

	const logout = () => {
		
		localStorage.removeItem("user");
		navigate("/login") 
		
	}
	
	
	const { data, isLoading , error } = useFetch(serviceGetPopularSeries);
	
	
	
	
	return(
		<>
			
			<h1>{`Bienvenido ${leerUsuario.username}`}</h1>
			<Link to="/movies">Ir a Movies</Link>
			<button onClick={logout}>Log Out</button>			
			<h1 className="title">SERIES</h1>
			<ul className="grid-container">
			{
				data.map(serie=> (
					<DisplaySeries
						key={serie.id}
						id={serie.id}
						title={serie.title}
						poster={serie.poster_path}
						overview={serie.overview}
						
						
						
					/>
				))
				
				
			}
			</ul>
			
			
		</>
	
	);



}

