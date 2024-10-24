import React, {useState} from "react";

import Monday from "./monday.jsx"
import Friday from "./friday.jsx";
import Tuesday from "./tuesday.jsx";
import Wednesday from "./wednesday.jsx";
import Thursday from "./thursday.jsx";
import Saturday from "./saturday.jsx";
import Sunday from "./sunday.jsx";
import Notes from "./notes.jsx";
import Title from "./title.jsx"




//create your first component
const Home = () => {
		return <>	
		<Title/>
		<div className="d-flex flex-wrap justify-content-center">
			<div className="d-flex flex-wrap justify-content-center">
				<Monday/>
				<Tuesday/>
				<Wednesday/>
				<Thursday/>
			</div>
			<div className="d-flex flex-wrap justify-content-center">
				<Friday/>
				<Saturday/>
				<Sunday/>
				<Notes/>
			</div>
			
		</div>
		</>
};

export default Home;
