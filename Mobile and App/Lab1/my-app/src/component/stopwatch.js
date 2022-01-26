import React from "react";

export default class Stopwatch extends React.Component{



	constructor(props) {
		super(props);
		this.flag=this.props.name;
		this.start=this.props.start;
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	state = {date: 0,universal:0,name:"Stopwatch",start:'f',delete:'f'}

	handleChange(event) {
		this.setState({name: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
	}
	componentDidMount(datep,flag) {
		console.log(this.state.start)
		if(this.state.start==='t'){
			if(flag!=='t'){
				const {date}=this.state
				this.timer = setInterval(() => this.tick(date), 1000)
			}
			else {
				console.log(flag)
				this.timer=setInterval(() => this.tick(datep),1000)
			}
		}



	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	tick(date) {
		const{flag}=this.state
		this.setState({date: this.state.date+1})
	}


	pauseClock=()=>{
		this.componentWillUnmount()
	}
	reset=()=>{
		this.setState({date: 0,universal:0})
	}
	edit=()=>{

	}
	resume=(date,flag)=>{
		this.componentDidMount(date,flag)
	}
	startNow=()=>{
		this.setState({start:'t'})
		this.componentDidMount()
	}
	delete=()=>{
		this.setState({delete:'t'})
	}

	render() {
		const {date,universal,name} = this.state


		if(this.flag==='t'&&this.state.delete!=='t'){
			return (

				<div className="clock_comp">
					<h1> {name} </h1>
					<h2>  {date-universal}</h2>
					<button onClick={this.startNow.bind(this)}>Start Now</button>
					<button onClick={this.pauseClock.bind(this)}>Pause</button>
					<button onClick ={this.reset.bind(this,0,'t')}>Reset</button>
					<button onClick={this.resume.bind(this,date,'t')}>Resume</button>
					<button onClick={this.edit.bind(this)}>Edit</button>
					<button onClick={this.delete.bind(this)}>Delete</button>

					<form onSubmit={this.handleSubmit}>
						<label>
							Change Title:
							<input type="text" value={this.state.name} onChange={this.handleChange} />
						</label>
						<input type="submit" value="Submit" />
					</form>

				</div>
			)
		}
		else {
			return (
				<div>

				</div>
			)
		}

	}

}