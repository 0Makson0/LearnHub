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
				<div className={style.TLS}>
					<div className={style.loginup}>
						<button className={style.LS}>LoginUp</button>
					</div>
					<div className={style.singup}>
						<button className={style.LS}>SignUp</button>
					</div>
				</div>
				<div className={style.profile}>
					<button className={style.pro}>
						<img src={profile} className={style.proicon} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header;