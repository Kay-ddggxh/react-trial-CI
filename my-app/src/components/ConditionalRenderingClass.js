import React, { Component } from "react";

export class ConditionalRenderingClass extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: true,
			isLoggedIn: true,
		};
	}
	render() {
		return (
			<div>
				<h1>{this.state.isLoaded ? "Data loaded!" : "Loading..."}</h1>
				{this.state.isLoggedIn ? (
					<div>
						<p>Welcome. Please complete these steps:</p>
						<ol>
							<li>Confirm your email</li>
							<li>Confirm your profile</li>
							<li>Subscribe to the newsletter</li>
						</ol>
					</div>
				) : (
					<p>Please sign in!</p>
				)}
			</div>
		);
	}
}

export default ConditionalRenderingClass;
