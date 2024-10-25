import React, {useState} from "react";

import Monday from "./monday.jsx"
import Title from "./title.jsx"
import Notes from "./notes.jsx"




//create your first component
const Home = () => {
		return ( <>
		<Title/>
		<div className="d-flex">		
		<Monday/>
		<Notes/>
		</div>	
		</>
)};

export default Home;
