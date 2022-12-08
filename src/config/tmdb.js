import axios from 'axios';
import { ENV } from '../environment/environment'



export const TMDB = {
	api: axios.create({
		baseURL: 'https://api.themoviedb.org/3',
		params : {
			api_key: ENV.API_KEY,
			
		},
		timeout: 2000,
		
		
	}),
	path: {
	
		movies: {
			latest: '/movie/latest',
			now_playing: '/movie/now_playing',
			popular: '/movie/popular',
			top_rated: '/movie/top_rated',
			upcoming: '/movie/upcoming'
		},
		
		tv : {
			latest: '/tv/latest',
			airing_today: '/tv/airing_today',
			on_the_air: '/tv/on_the_air',
			popular: '/tv/popular',
			top_rated: '/tv/top_rated',
		
		}
	},
	 images: {
    base_url : "http://image.tmdb.org/t/p/",
    secure_base_url: "https://image.tmdb.org/t/p/",
    backdrop_sizes: {
      w300: 'w300',
      w780: 'w780',
      w1280: 'w1280',
      original: 'original'
    },
    logo_sizes: {
      w45: "w45",
      w92: "w92",
      w154: "w154",
      w185: "w185",
      w300: "w300",
      w500: "w500",
      original: "original"
    },
    poster_sizes: {
      w92: "w92",
      w154: "w154",
      w185: "w185",
      w342: "w342",
      w500: "w500",
      w780: "w780",
      original: "original"
    },
    profile_sizes: {
      w45: "w45",
      w185: "w185",
      h632: "h632",
      original: "original"
    },
    still_sizes: {
      w92: "w92",
      w185: "w185",
      w300: "w300",
      original: "original"
    }
  }
		
		
	}
	



