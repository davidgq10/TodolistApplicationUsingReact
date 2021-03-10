import React, { useState } from "react";

//include images into your bundle

//create your first component
export function Home() {
	const [task, setTask] = useState("");
    const [tasklist, setTaskList] = useState([]);

	const handleOnKeyPress = e => {
		if (e.key === "Enter") {
			setTaskList([...tasklist, task]);
			console.log(tasklist);
			setTask("");
		}
	};

	const generarLista = () => {
		return tasklist.map(detalle => {
			return generarItem(detalle);
		});
	};

	const generarItem = detalle => {
		return (
			<li className="list-group-item">
				<p className="d-inline-block text-secondary ml-5 align-middle">
					{detalle}
				</p>
				<button type="button" className="btn btn-light float-right">
                    <i className="fas fa-times" 
                    // onKeyPress= {e => }
                    ></i>
				</button>
			</li>
		);
	};

	return (
		<div className="container">
			<h1 className="text-muted text-center display-4">Todos</h1>
			<input
				type="text"
				placeholder="input"
				className="form-control mb-2 text-secondary"
				value={task}
				onChange={e => setTask(e.target.value)}
				onKeyPress={e => handleOnKeyPress(e)}
			/>
			<ul className="list-group">
				{generarLista()}
				<div>
					<label htmlFor="list-group-item">
						<p className="text-secondary ml-5 mt-2">To do</p>
					</label>
				</div>
			</ul>
		</div>
	);
}
