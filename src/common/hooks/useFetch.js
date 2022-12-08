
import React , { useState , useEffect } from 'react';


export const useFetch = (service) => {
	const [data,setData]= useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError]= useState(null);
	
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
		
	},[])
	
	return { data, isLoading, error }
	
	
}

	
