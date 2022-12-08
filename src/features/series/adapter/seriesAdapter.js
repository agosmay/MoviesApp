import { TMDB } from '../../../config/tmdb'

export const seriesAdapter = (series)=> {
	return series.map((serie)=> (
	{
		id: serie.id,
		backdrop_path: serie.backdrop_path,
		original_language: serie.original_language,
		original_title: serie.original_name,
		origin_country: serie.origin_country,
		overview: serie.overview,
		popularity: serie.popularity,
		poster_path: TMDB.images.base_url + TMDB.images.backdrop_sizes.w300 + serie.poster_path,
		first_air_date: serie.first_air_date,
		title: serie.name,
		vote_average: serie.vote_average,
		vote_count: serie.vote_count	
		
	}
	
	
	
	))
	
}