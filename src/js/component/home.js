import React, { useState } from "react";

//create your first component
export function Home() {
	//Declaración de Hooks del componente
	const [tasklist, setTaskList] = useState([]);
	const [task, setTask] = useState("");

	//Evento que se genera al presionar una tecla del input newtask
	const handleOnKeyPress = e => {
		//Verifica si la tecla presionada es enter, true agrega elemento a lista de tareas
		if (e.key === "Enter") {
			e.preventDefault();
			//define la newTask que será añadida al array
			const newTask = {
				id: new Date().getTime(),
				description: task
			};
			//clona el tasklist actual y le añade la newTask
			setTaskList([...tasklist].concat(newTask));
			//reinicia el valor de task
			setTask("");
		}
	};

	const generarLista = () => {
        //recorre el objeto y genera los elementos de la lista
		return tasklist.map(task => (
			<li key={task.id} className="list-group-item">
				<p className="d-inline-block text-secondary ml-5 align-middle">
					{task.description}
				</p>
				<button
					type="button"
					className="btn btn-light float-right"
					onClick={() => deleteTask(task.id)}>
					<i className="fas fa-times"></i>
				</button>
			</li>
		));
	};

    // función para eliminar task al dar click al button
	function deleteTask(id) {
		let updateTaskList = [...tasklist].filter(task => task.id !== id);
		setTaskList(updateTaskList);
	}

	//genera el componente
	return (
		<div className="container">
			<h1 className="text-muted text-center display-4">To-Do</h1>
			<input
				type="text"
				placeholder="Type a new task"
				className="form-control mb-2 text-secondary"
				value={task}
				onChange={e => setTask(e.target.value)}
				onKeyPress={e => handleOnKeyPress(e)}
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
