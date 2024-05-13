import logo from "./logo.svg";
import "./App.css";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingsWithProps";

function App() {
	return (
		<div className="App">
			<FunctionalGreetingWithProps greeting="Nice to meet you!" name="Kay" age="33"/>
		</div>
	);
}

export default App;
