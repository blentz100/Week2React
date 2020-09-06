import React from 'react';
import Counter from './counter';

export default class Stars extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			counts: {},
			highestCount: 0,
			highestCountName: ''
		};
		this.countClicks = this.countClicks.bind(this);
	}
	
	countClicks(name){
			this.setState(state => {
				state.highestCountName = name;
				return state;
			});
	}
	
	render(){
		return(
			<div>
				<h2>Your Rating of this Movie: {this.state.highestCountName}</h2>
			<Counter 
				name="1 Star" 
				count={this.state.counts.one}
				onClick={this.countClicks}
			/>
			<Counter 
				name="2 Stars" 
				count={this.state.counts.one}
				onClick={this.countClicks}
			/>
			<Counter 
				name="3 Stars" 
				count={this.state.counts.one}
				onClick={this.countClicks}
			/>
			<Counter 
				name="4 Stars" 
				count={this.state.counts.one}
				onClick={this.countClicks}
			/>
			<Counter 
				name="5 Stars" 
				count={this.state.counts.one}
				onClick={this.countClicks}
			/>
			</div>
		);
	}
}
