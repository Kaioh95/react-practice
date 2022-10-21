import GlobalStyles from "./styles/global"
import "./styles/App.css"
import Card from "./components/Card";
import Intervalo from "./components/Intervalo";
import Media from "./components/Calculo/Media";
import Soma from "./components/Calculo/Soma";
import Sorteio from "./components/Calculo/Sorteio"
import { useState } from "react";

function App() {
	const [min, setMin] = useState<number>(100)
	const [max, setMax] = useState<number>(1000)

	return (
		<div className="App">
			<GlobalStyles/>
			<h1>Exercício React-Redux (Simples)</h1>

			<div className="linha">
				<Intervalo />
			</div>

			<div className="linha">
				<Media/>
				<Soma/>
				<Sorteio/>
			</div>
		</div>
	);
}

export default App;
