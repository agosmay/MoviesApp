import React from 'react';
import './stylesheets/DisplayMovies.css'

export const DisplayMovies= ( { title , poster , overview , vote_average } ) => {
	return(
		<>
				<li className="grid-item title">
					<div>{title}</div>
					<img src={poster} alt={title} />
					<p className="movieOverview">{overview}</p>
					<button className="buttonPlay" onClick={()=> alert(`Movie : ${title} ||| Rating : ${vote_average}`)}>See Rating!</button>
					
				</li>
		</>
		
	);
	
}




