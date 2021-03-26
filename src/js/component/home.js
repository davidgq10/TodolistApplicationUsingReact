import React, { useState } from "react";

//include images into your bundle

//create your first component
export function Home() {
	const [task, setTask] = useState("");
	const [tasklist, setTaskList] = useState([]);

	//Verifica si la tecla presionada es enter, true agrega elemento a lista de tareas
	const handleOnKeyPress = e => {
		if (e.key === "Enter") {
			setTaskList([...tasklist, task]);
			{
				console.log(tasklist);
			}
			setTask("");
		}
	};

	function handleRemove(index) {
		{
			console.log(index);
		}
		// remover el artículo
	}

	//genera lista de tareas en base al array
	const generarLista = () => {
		return tasklist.map(detalle => {
			return generarItem(detalle);
		});
	};

	//genera elemento de la lista
	const generarItem = detalle => {
		return (
			<li key={detalle.index} className="list-group-item">
				<p className="d-inline-block text-secondary ml-5 align-middle">
					{detalle}
				</p>
				<button
					type="button"
					className="btn btn-light float-right"
					onKeyPress={() => handleRemove(detalle.key)}>
					<i className="fas fa-times"></i>
				</button>
			</li>
		);
	};

	//genera el html del componente
	return (
		<div className="container">
			<h1 className="text-muted text-center display-4">Todos</h1>
			<input
				type="text"
				placeholder="New task"
				className="form-control mb-2 text-secondary"
				value={task}
				onChange={e => setTask(e.target.value)}
				onKeyPress={e => handleOnKeyPress(e)}
				//style="height: 20px;"
			/>
			<ul className="list-group">
				{generarLista()}
				<div>
					<label htmlFor="list-group-item">
						<p className="text-secondary ml-5 mt-2">
							{tasklist.length} item left
						</p>
					</label>
				</div>
			</ul>
		</div>
	);
}
