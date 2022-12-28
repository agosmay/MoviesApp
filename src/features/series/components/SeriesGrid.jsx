
import React , { useContext , useState , useEffect } from 'react';
import './stylesheets/DisplaySeries.css'
import { AuthContext } from '../../../auth/context/AuthContext'
import { Link , useNavigate } from 'react-router-dom';
import { DisplaySeries } from './DisplaySeries';
import axios from 'axios';
import { ENV } from '../../../environment/environment'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiCameraMovie } from 'react-icons/bi';

export const SeriesGrid = () => {
	
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
			const res = await axios(`https://api.themoviedb.org/3/tv/popular?api_key=${ENV.API_KEY}&page=${counter}`)
			
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
			
					
			<h1 className="title">SERIES</h1>
			<div className="link-container"><button className="btn-link" type="button"><Link to="/movies" className="link">Go to Movies <BiCameraMovie/></Link></button></div>
			<div className="btn-container">
				<button type="button" onClick={atras} className="btn"><AiOutlineArrowLeft /></button><button type="button" onClick={siguiente} className="btn"><AiOutlineArrowRight /></button>
			</div>
			<ul className="grid-container">
			{
				datos.map(serie=> (
					<DisplaySeries
						key={serie.id}
						id={serie.id}
						title={serie.name}
						poster={`https://image.tmdb.org/t/p/w300/${serie.poster_path}`}
						overview={serie.overview}
						vote_average={serie.vote_average}

						
						
						
					/>
				))
				
				
			}
			</ul>
			<div className="btn-container">
				<button type="button" onClick={atras} className="btn"><AiOutlineArrowLeft /></button><button type="button" onClick={siguiente} className="btn"><AiOutlineArrowRight /></button>
			</div>
			<div className="link-container"><button className="btn-link" type="button"><Link to="/movies" className="link">Go to Movies <BiCameraMovie/></Link></button></div>
			
			
		</>
	
	);



}


