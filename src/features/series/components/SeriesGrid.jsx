
import React , { useContext , useState , useEffect } from 'react';
import './stylesheets/DisplaySeries.css'
import { AuthContext } from '../../../auth/context/AuthContext'
import { Link , useNavigate } from 'react-router-dom';
import { DisplaySeries } from './DisplaySeries';
import axios from 'axios';
import { ENV } from '../../../environment/environment'

export const SeriesGrid = () => {
	
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
			const res = await axios(`https://api.themoviedb.org/3/tv/popular?api_key=${ENV.API_KEY}&page=${counter}`)
			
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
			<Link to="/movies">Ir a Movies</Link>
			<button onClick={logout}>Log Out</button>			
			<h1 className="title">MOVIES</h1>
			<button type="button" onClick={atras}>Atras</button><span>{counter}</span><button type="button" onClick={siguiente}>SIGUIENTE</button>
			<ul className="grid-container">
			{
				datos.map(serie=> (
					<DisplaySeries
						key={serie.id}
						id={serie.id}
						title={serie.title}
						poster={`https://image.tmdb.org/t/p/w300/${serie.poster_path}`}
						overview={serie.overview}
						
						
						
					/>
				))
				
				
			}
			</ul>
			
			
		</>
	
	);



}


