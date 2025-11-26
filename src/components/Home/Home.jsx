import React from "react";
import Header from "../Header/Header";
import style from "../Home/Home.module.css"
import { Link } from "react-router-dom";

function Home(){
	return (
		<>
			<Header />
			<div className={style.startButton}>
				<Link to="/CC">
					<button className={style.sButton}>Создать курс</button>
				</Link>
			</div>
		</>
	)
}

export default Home;