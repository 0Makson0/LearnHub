import style from "./Header.module.css"
import profile from "../../assets/profile.webp"

function Header(){
	return(
		<div className={style.header}>
			<div className={style.logo}></div>
			<div className={style.search}>
				<input type="text" className={style.input} placeholder="поиск курсов" />
			</div>
			<div className={style.GLS}>
				<div className={style.loginup}>
					<button className={style.LS}>Loginup</button>
				</div>
				<div className={style.singup}>
					<button className={style.LS}>Signup</button>
				</div>
				<div className={style.profile}>
					<button className={style.pro}>
						<img src={profile} className={style.icon} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header;