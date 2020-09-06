import React from 'react';
import Review from './review';

export default class ReviewForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { review: '' };
	}	  

	mySubmitHandler = (event) => {
		event.preventDefault();
		alert("You are submitting " + this.state.review);
	  }
	myChangeHandler = (event) => {
		this.setState({review: event.target.value});
	  }
	render() {
		return (
			<div>
		  <form onSubmit={this.mySubmitHandler}>
			  <p>Please enter your review of this movie.</p>
			  <input type='text'onChange={this.myChangeHandler}/>
			  <input type='submit'/>
		  </form> <Review review={this.state.review} /> </div>
		);
	  }
}



