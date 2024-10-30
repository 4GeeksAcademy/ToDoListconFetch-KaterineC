import React, { useState, useEffect } from "react";

const Monday = () => {
  let [tareas, setTareas] = useState([]);
  let [tareaNueva, setTareaNueva] = useState("");

  const cargarTareas = async () => {
	
    const url = "https://playground.4geeks.com/todo/users/drastone";
    const resp = await fetch(url);
    const data = await resp.json();
    setTareas(data.todos);
  };

  useEffect(() => {
    cargarTareas();
  }, []);

  return (
    <div className="container my-5 background col-4">
      <h1 className="text-center">Tasks</h1>
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="What's needs to be done?"
          value={tareaNueva}
          onChange={(event) => {
            setTareaNueva(event.target.value);
          }}
          onKeyUp={async (event) => {
            if (event.key === "Enter") {
              const url = "https://playground.4geeks.com/todo/todos/drastone";
              const resp = await fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  label: tareaNueva,
                  is_done: false,
                }),
              });
              if (resp.ok) {
                setTareaNueva(""); 
                cargarTareas(); 
              }
            }
          }}
        />

        <ul>
          {tareas.length === 0 ? (
            <li>No hay tareas, añadir tareas</li>
          ) : (
            tareas.map((item, index) => (
              <li key={index}>
                {item.label}
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
