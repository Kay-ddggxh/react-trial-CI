import React from "react";

const FunctionalGreetingWithProps = (props) => {
	console.log(props);
	return <h1>Hello, {props.greeting}. My name is {props.name} and I'm {props.age} years old.</h1>;
};

export default FunctionalGreetingWithProps;
