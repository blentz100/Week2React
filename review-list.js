import React from 'react';
import ReviewForm from './review-form';
import Review from './review';

export default class ReviewList extends React.Component {
	render(){
		return (
			<div className="container">
				<ReviewForm />	
			</div>);
	}
}
