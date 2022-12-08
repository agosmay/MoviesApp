
import { TMDB } from '../../../config/tmdb';

import { seriesAdapter } from '../adapter/seriesAdapter'


export const serviceGetPopularSeries = async () => {
		const url = TMDB.api(TMDB.path.tv.popular)
			const res = await(url)
			
			const adaptedResponse = seriesAdapter(res.data.results)

			
			return adaptedResponse;
		
			
	
}
