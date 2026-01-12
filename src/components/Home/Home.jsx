import React from "react";
import style from "./Home.module.css";
import mainPhoto from "../../assets/MainPhoto.svg";

function Home(){
	return (
		<div className={style.home_page}>
			<div className={style.in_home_page}>
				<div >
					<span className={style.main_text}>Навчай. Створюй. Розвивайся разом із LearnHub.</span>
				</div>
				<div className={style.text_photo}>
					<div className={style.left_main_text}>
						<div className={style.description_text}>
						Платформа, де кожен може створити власний онлайн-курс, поділитися знаннями та навчатися у інших. 
						<br /> 
						<br />
						<div style={{width: 255}}>Знання — це сила, коли ними діляться.</div>
						</div>
					
						<div className={style.main_buttons}>
							<div>
								<button className={style.main_button}>Знайти курс</button>
							</div>
							
							<div >
								<button className={style.main_button}>Створити курс</button>
							</div>
						</div>
					</div>
					<div className={style.main_ph}>
						<img src={mainPhoto} className={style.main_photo} />
					</div>
				</div>
				
				
			</div>
			
			
		</div>
	)
}

export default Home;