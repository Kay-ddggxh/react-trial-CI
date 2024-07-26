import React, { Component } from "react";
import importedNames from "../names";

export class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			names: importedNames,
		};
	}

	handleChange = (event) => {
		const inputText = event.target.value.toLowerCase();
		const filteredNames = importedNames.filter((name) =>
			name.toLowerCase().includes(inputText)
		);
		this.setState({
			names: filteredNames,
		});
	};

	render() {
		return (
			<div>
				<h1>Name Search</h1>
				<p>Matching names found: {this.state.names.length}</p>
				<form>
					<label htmlFor="id-search-name">Type a name here:</label>
					<input
						type="text"
						id="id-search-name"
						name="search-name"
						placeholder="search names..."
						onChange={(event) => this.handleChange(event)}
					></input>
				</form>
				<div>We will render names here...</div>
				{this.state.names.map((name) => (
					<p key={name}>{name}</p>
				))}
			</div>
		);
	}
}

export default SearchBar;
