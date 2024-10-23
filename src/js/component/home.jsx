import React, {useState} from "react";



//create your first component
const Home = () => {

	let [tareas, setTareas] = useState(["Bañarse", "Comer", "Cocinar", "Leer sobre React"])
	let [tareaNueva, setTareaNueva] = useState("")

	return (
		<div className="container mt-5">

			<h1 className="text-center mt-5">Todos</h1>
			<div className="col-6 mx-auto">
				<input type="text" className="form-control" placeholder="What's needs to be done?"
					value={tareaNueva} onChange={(event) =>{
						setTareaNueva(event.target.value)
					}}

					onKeyUp = {(event) => {
						if(event.key == "Enter"){
							setTareas([...tareas,tareaNueva ])
							setTareaNueva("")
						}

					}}
				/>
			
				<ul className="">
					{tareas.map((items, index)=> {
						return (
							<li key={index}>
								{items}<i className="fa-solid fa-trash icono-oculto" onClick={()=>{
							const aux = tareas.filter((_task, ind) => {
										return (ind != index)
									})
									setTareas(aux)
								}}

								></i>
							</li>
						)
						})}

				</ul>
						<span>{tareas.length} Items left</span>
			</div>
		</div>
	);
};

export default Home;
