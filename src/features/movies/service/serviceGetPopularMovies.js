
import { TMDB } from '../../../config/tmdb';

import { moviesAdapter } from '../adapter/moviesAdapter'


export const serviceGetPopularMovies = async () => {
		const url = TMDB.api(TMDB.path.movies.popular)
			const res = await(url)
			
			const adaptedResponse = moviesAdapter(res.data.results)

			
			return adaptedResponse;
		
			
	
}



