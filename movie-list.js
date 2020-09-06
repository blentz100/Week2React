import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
	render(){
		return (
			<div className="container">
				<Movie {...{title: 'Hackers', image:
				'https://m.media-amazon.com/images/M/MV5BNmExMTkyYjItZTg0YS00NWYzLTkwMjItZWJiOWQ2M2ZkYjE4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
					synopsis: 'Hackers are blamed for making a virus that will capsize five oil tankers.', rating: 'PG'}} />
				<Movie {...{title: 'The Pursuit of Happyness', image:
				'https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
					synopsis: 'A struggling salesman takes custody of his son as he is  poised to begin a life-changing professional career.',
				rating: 'PG-13'}} />
				<Movie {...{title: 'Knives Out', image:
				'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
					synopsis: 'A detective investigates the death of a patriarch of an eccentric, combative family.', 
					rating: 'PG-13'}} />
			</div>
		);
	}
}
