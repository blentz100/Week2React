import React from 'react';
import Stars from './stars';
import ReviewList from './review-list';

export default class Movie extends React.Component{
		constructor(props) {
			super(props);
			this.state = {
				title: props.title,
				image: props.image,
				synopsis: props.synopsis,
				rating: props.rating
			};
		}
		render(){
			return(
				<div className="card w-75">
					<div className="card-header bg-primary text-white">
						{this.state.title}
					</div>
					<div className="card-body">
						<div> <img src={this.state.image} alt="movie poster"/></div>
						<div>Synopsis: {this.state.synopsis}</div>
						<div>Rating: {this.state.rating}</div>
					</div>
					<div className="card-footer">
						<Stars />
						<br />
						<ReviewList />
					</div>
				</div>
		)


	}
}
