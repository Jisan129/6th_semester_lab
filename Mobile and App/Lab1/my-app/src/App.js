import './App.css';
import './component/data'
import data from "./component/data";
import Check from "./component/check"
function App() {
	console.log(data[0].id)


	return (
		/*<div>
			{
				data.map((p, i) =>
					<div>
						<h1>{p.title}</h1>,
						<h1>{p.id}</h1>
						<button >Click Me</button>
					</div>
				)
			}
		</div>*/
		<Check>

		</Check>

	);
}

export default App;
