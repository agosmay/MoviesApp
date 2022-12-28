import React from 'react';
import './stylesheets/DisplaySeries.css';

export const DisplaySeries = ( { title , poster, overview, vote_average } ) => {
	
	return (
		<>	
			<li className="grid-item title">
				<div>{title}</div>
				<img src={poster} alt={title} />
				<p className="movieOverview">{overview}</p>
				<button type="button" className="buttonPlay" onClick={()=>alert(`Tv Show : ${title} ||| Rating : ${vote_average}`)}>See rating!</button>
			</li>
			
		</>
	);
}

