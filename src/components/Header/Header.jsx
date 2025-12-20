import style from "./Header.module.css"
import { Link } from "react-router-dom";
import { BookOpen } from 'lucide-react';
import Input from "./InputSearch";


function Header(){
	return(
		<header>
			<div className={style.header}>
				<div className={style.left_H}>
					<div className={style.logo}>
						<BookOpen size={40} color="#0062ff" strokeWidth={2} />
					</div>
					<div className={style.name_logo}>LearnHub</div>
				</div>
				<Input />
				<div className={style.rigth_H}>
					<div className={style.catalog}>Каталог</div>
					<div className={style.my_course}>Курсы</div>
					<div className={style.profile}>Профиль</div>
				</div>
			</div>
		</header>
	)
}

export default Header;