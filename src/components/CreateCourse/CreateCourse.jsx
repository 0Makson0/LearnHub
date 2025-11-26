import Header from "../Header/Header";
import { useState } from "react";
import style from "./CreateCourse.module.css"

function CreateCourse(){
	const [image, setImage] = useState(null)

	function imageUpLoad(e){
		const file = e.target.files[0]
		if(!file) return
		
		const url = URL.createObjectURL(file)
		setImage(url)
	}
	return(
		<>
			<Header />
			<input
			className={style.inputImg}
			type="file"
			id="file"
			accept="image/*"
			onChange={imageUpLoad}
			/>

			<label className={style.formUpload} htmlFor="file">
			{image ? (
				<img src={image} alt="preview" className={style.imageOnButton} />
			) : (
				"Upload File"
			)}
			</label>
			
		</>
	)
	
}

export default CreateCourse;