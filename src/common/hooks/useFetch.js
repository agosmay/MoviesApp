
import React , { useState , useEffect } from 'react';


export const useFetch = (service) => {
	const [data,setData]= useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError]= useState(null);
	const [page, setPage] = useState(1);
	
	
	const atras = ()=> {
		if(page<=1){
			setPage(1)
		}else{
			setPage(page-1)
		}
	}
	
	
	const siguiente = () => {
		setPage(page +1)
		
	}

	
	
	const fetchingData = async () => {
		try {
			const data = await service();
			setData(data);
			
			
		}catch(err){
			setError(true);
		}finally {
			setIsLoading(false);
		}
		
		
	}
	useEffect(()=> {
		
		fetchingData();
		
	},[page])
	
	return { data, isLoading, error , page , atras , siguiente }
	
	
}

	

