import './App.css';
import './component/data'
import data from "./component/data";
import Check from "./component/check"
import Form from "./component/form"
import Stopwatch from './component/stopwatch'
import React from "react";

class App extends React.Component {
	state = {
		one: 't',
		two: 'f',
		three: 'f',
		num: 1,
		flag1:'t',
		flag2:'f',
		flag3:'f'
	}
	nextButton = () => {
		this.setState({two: 't',flag1:'f',flag2:'t'})
	}
	nextStop = ()=>{
		this.setState({two:'f'})
	}
	nextButton2 = ()=>{
		this.setState({three: 't',flag2:'f',flag3:'t'})

	}

	nextButton3 = ()=>{
		this.setState({three: 't',flag1:'f',flag2:'f'})

	}
	render() {

		return (
			<div>
				{this.state.flag1==='t'?<button onClick={this.nextButton.bind(this)}>Add new Timer</button>:null
				}
				{this.state.flag2==='t'?<button onClick={this.nextButton2.bind(this)}>Add new Timer</button>:null
				}
				{this.state.flag3==='t'?<button onClick={this.nextButton3.bind(this)}>Add new Timer</button>:null
				}

			<div>
				<Stopwatch name={this.state.one} start={'t'}/>
				<Stopwatch name={this.state.one} start={'f'}/>
				<Stopwatch name={this.state.one } start={'f'}/>
			</div>
				{this.state.two==='t' ? <Stopwatch name={this.state.one}/> : null}
				{this.state.three==='t' ? <Stopwatch name={this.state.one}/> : null}

			</div>
		);
	}
}

export default App;
