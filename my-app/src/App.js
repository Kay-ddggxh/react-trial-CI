import logo from "./logo.svg";
import "./App.css";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import NestingComponents from "./components/NestingComponents";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";

function App() {
	return (
		<div className="App">
			<MethodsAsPropsParent />
		</div>
	);
}

export default App;
