import React from 'react';

export default class Review extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			review: props.review
		}
		console.log('got inside constructor');
	}

	render(){

		let reviews = [];
		console.log('got inside render');
		if (this.state.reviews){
			console.log('got inside if statement');
			for (let review of this.state.reviews){
				reviews.push(<Review {...review} />);
			}
		}

		return( 
			<div className="border" >
				{reviews}
				{this.state.review}
				Here is where the reviews will go.
			</div>
		);

	}
}
