import React from "react";
import style from "./ModuleRegister.module.css";

function ModuleRegister() {
	return (
		<div>
			<form action="" method="post">
				<div>
					<label htmlFor="name">
						<input type="text" name="name" id="name" required placeholder="Імя користувача" />
					</label>
				</div>
				<div>
					<label htmlFor="pass">
						<input type="password" name="pass" id="pass" required placeholder="Пароль"/>
					</label>
				</div>
				<div>
					<input type="submit" value="Subscribe!" />
				</div>
			</form>
		</div>
	);
}

export default ModuleRegister;