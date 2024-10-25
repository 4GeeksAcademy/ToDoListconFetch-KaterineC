import React, {useState} from "react";

const Monday = () => {

	let [tareas, setTareas] = useState(["Bañarse", "Comer", "Cocinar", "Leer sobre React"])
	let [tareaNueva, setTareaNueva] = useState("")

	return (
		<div className="container my-5 background">

			<h1 className="text-center">Tasks</h1>
			<div>
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
			
			<ul>
          {tareas.length === 0 ? (
            <li>No hay tareas, añadir tareas</li>
          ) : (
            tareas.map((item, index) => (
              <li key={index}>
                {item}
                <i
                  className="fa-solid fa-trash icono-oculto"
                  onClick={() => {
                    const aux = tareas.filter((_task, ind) => ind !== index);
                    setTareas(aux);
                  }}
                ></i>
              </li>
            ))
          )}
        </ul>
						<span>{tareas.length} Items left</span>
			</div>
		</div>
	);
};

export default Monday;