import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import style from "./Header.module.css";
import logo from "../../assets/logo.svg";
import Switch from "./Switch";

function Header() {

	const [isOn, setIsOn] = useState(() => {
		const savedStatus = localStorage.getItem("data-theme");

		if (savedStatus !== true) {
			return savedStatus === "false";
  		}
		return window.matchMedia("(prefers-color-scheme: dark)").matches
	})
	useEffect(() => {
		if (isOn) {
			document.documentElement.setAttribute("data-theme", "dark");
			localStorage.setItem("data-theme", "false")
	
		} else {
			document.documentElement.setAttribute("data-theme", "light");
			localStorage.setItem("data-theme", "true")
	
		}
	}, [isOn])
   
    return (
        <header>
            <div className={style.header} style={{ backgroundColor: 'var(--header-bg)'}}>
                <div className={style.left_header}>
                    <div className={style.logo_container}>
                        <img src={logo} className={style.logo} alt="LearnHub Logo" />
                    </div>
                    <div className={style.name_logo}><Link to="/">LearnHub</Link></div>
                </div>
                <div className={style.right_header}>
                    <div className={style.courses}><Link to="/courses">Мої курси</Link></div>
                    <div className={style.profile}>Профіль</div>
                    <div className={style.option_tema}>
                        <Switch checked={isOn} onChange={() => setIsOn(!isOn)}  />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;