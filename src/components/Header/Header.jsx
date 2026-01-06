import React, { useState, useEffect } from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo.svg";
import Switch from "./Switch";

function Header() {

	const [isOn, setIsOn] = useState(() => {
		return window.matchMedia("(prefers-color-scheme: dark)").matches
	})
	useEffect(() => {
		if (isOn) {
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			document.documentElement.setAttribute("data-theme", "light");
	}
	}, [isOn])
   
    return (
        <header>
            <div className={style.header} style={{ backgroundColor: 'var(--header-bg)'}}>
                <div className={style.left_header}>
                    <div className={style.logo_container}>
                        <img src={logo} className={style.logo} alt="LearnHub Logo" />
                    </div>
                    <div className={style.name_logo}>LearnHub</div>
                </div>
                <div className={style.rigth_header}>
                    <div className={style.courses}>Мої курси</div>
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