import React , { useContext , useState , useEffect } from 'react';
import './stylesheets/DisplayMovies.css'
import { AuthContext } from '../../../auth/context/AuthContext'
import { Link } from 'react-router-dom';
import { DisplayMovies } from './DisplayMovies';
import axios from 'axios';
import { ENV } from '../../../environment/environment'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsDisplay } from 'react-icons/bs';

export const MoviesGrid = () => {
	
	const { isAuth , user , leerUsuario } = useContext(AuthContext)
	

   
	
	
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
			
			<h1 className="title">MOVIES</h1>
			<div className="link-container"><Link to="/series" className="link">Go to Series <BsDisplay/></Link></div>
			<div className="btn-container">
				<button type="button" onClick={atras} className="btn"><AiOutlineArrowLeft /></button><button type="button" onClick={siguiente} className="btn"><AiOutlineArrowRight /></button>
			</div>
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
			<div className="btn-container">
				<button type="button" onClick={atras} className="btn"><AiOutlineArrowLeft /></button><button type="button" onClick={siguiente} className="btn"><AiOutlineArrowRight /></button>
			</div>
			<div className="link-container"><Link to="/series" className="link">Go to Series <BsDisplay/></Link></div>
			
			
		</>
	
	);



}


