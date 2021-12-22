import React from "react";
import data from "./data"
class check extends React.Component {
	constructor() {
		super();
		this.state = {data:data}
	}
	updateVoter=(props)=>{
		console.log(props.votes)
		console.log(this.state.data[props.id])
		this.setState(this.state.data[props.id].votes=data[props.id].votes+1)
		console.log(this.state.data[props.id])

	}

	render() {

		return (
			<div>
				{
					data.map((p, i) =>
						<div>
							<h1>{p.title}</h1>,
							<h1>{p.votes}</h1>
							<button onClick={this.updateVoter.bind(this,p)}>{this.useState}</button>
						</div>
					)
				}
			</div>

		);
	}
}

export default check;
