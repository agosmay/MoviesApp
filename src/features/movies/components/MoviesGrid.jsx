import React , { useContext , useState , useEffect } from 'react';
import './stylesheets/DisplayMovies.css'
import { AuthContext } from '../../../auth/context/AuthContext'
import { Link , useNavigate } from 'react-router-dom';
import { DisplayMovies } from './DisplayMovies';
import axios from 'axios';
import { ENV } from '../../../environment/environment'

export const MoviesGrid = () => {
	
	const { isAuth , user , leerUsuario } = useContext(AuthContext)
	

   	const navigate = useNavigate();

	const logout = () => {
		
		localStorage.removeItem("user");
		navigate("/login") 
		
	}
	
	
	const [datos, setDatos] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)
	
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
	
	const fetchingData = async() => {
		
		
		
		try{
			const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${ENV.API_KEY}&page=${counter}`)
			
				setDatos(res.data.results)
				
				console.log(res)
				console.log(counter)
			
	
			
		}catch(err){
			setError(true)
		}finally{
			setIsLoading(false)
		}
		
		
	}
	
	
	useEffect(()=> {
		fetchingData();
	},[counter])
	
	

	
	
	
	
	return(
		<>
			<h1>{`Bienvenido ${leerUsuario.username}`}</h1>
			<Link to="/series">Ir a Series</Link>
			<button onClick={logout}>Log Out</button>			
			<h1 className="title">MOVIES</h1>
			<button type="button" onClick={atras}>Atras</button><span>{counter}</span><button type="button" onClick={siguiente}>SIGUIENTE</button>
			<ul className="grid-container">
			{
				datos.map(movie=> (
					<DisplayMovies
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


