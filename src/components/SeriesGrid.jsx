import React , { useContext , useEffect , useState } from 'react';
import './stylesheets/DisplaySeries.css'
import { AuthContext } from '../context/AuthContext'
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DisplaySeries } from './DisplaySeries';
import { ENV } from '../environment/environment';

export const SeriesGrid = () => {
	
		const { isAuth , user } = useContext(AuthContext)
	console.log(user)

   	const navigate = useNavigate();

	const logout = () => {
		
		localStorage.removeItem("user");
		navigate("/login") 
		
	}
	
	const [movies,setMovies]= useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError]= useState(false);
	
	const fetchingData = async () => {
		try {
			const res = await axios(`https://api.themoviedb.org/4/list/2?api_key=${import.meta.env.VITE_API_KEY}`);
			setMovies(res.data.results);
			console.log(res.data.results)
			
		}catch(err){
			setError(true);
		}finally {
			setIsLoading(false);
		}
		
		
	}
	useEffect(()=> {
		fetchingData();
		
	},[])
	
	
	
	return(
		<>
			<h1>ESTA ES LA RUTA DE SERIES</h1>
			<h1>{isAuth ? "Autenticado con exito" : "Por favor inicie sesion"}</h1>
			<h3>Bienvenido {isAuth ? user.email : "Invitado"}</h3>
			<Link to="/movies">Ir a Movies</Link>
			<button onClick={logout}>Log Out</button>			
			<h1 className="title">SERIES</h1>
			<ul className="grid-container">
			{
				movies.map(movie=> (
					<DisplaySeries
						key={movie.id}
						id={movie.id}
						title={movie.title}
						poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
						overview={movie.overview}
						
						
						
					/>
				))
				
				
			}
			</ul>
			
			
		</>
	
	);



}
