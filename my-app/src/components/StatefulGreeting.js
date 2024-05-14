import React from "react";

class StatefulGreeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			introduction: "Hello!",
			buttonText: "Exit",
			counter: 0,
		};
	}

	handleClick() {
		this.setState((prevState, prevProps) => {
			console.log("Previous state:", prevState);
			console.log("Previous props:", prevProps);
			return {
				introduction:
					prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
				buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
			};
		});
	}

	increment() {
		this.setState((prevState, prevProps) => {
			console.log("Previous state:", prevState);
			console.log("Previous props:", prevProps);
			return {
				counter: prevState.counter + 1,
			};
		});
	}

	render() {
		return (
			<div>
				<h1>
					{this.state.introduction} {this.props.greeting}
				</h1>
				<div id="counter">{this.state.counter}</div>
				<button onClick={() => this.handleClick()}>
					{this.state.buttonText}
				</button>
				<br />
				
				<button onClick={() => this.increment()}>Increment</button>
			</div>
		);
	}
}

export default StatefulGreeting;
