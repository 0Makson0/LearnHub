import Header from "../Header/Header";
import { useState } from "react";
import style from "./CreateCourse.module.css"

function CreateCourse(){
	const [image, setImage] = useState(null)
	const [valueT, setValueT] = useState("")

	function imageUpLoad(e){
		const file = e.target.files[0]
		if(!file) return
		
		const url = URL.createObjectURL(file)
		setImage(url)
	}
	return(
		<>
			<Header />
			<div className={style.img_title}>
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
				<div className={style.box_title}>
					<div className={style.courseTitlePreview}>{valueT}</div>

					<input 
						className={style.title_course}
						type="text"
						placeholder="Как назовешь свой курс?"
						value={valueT}
						onChange={e => setValueT(e.target.value)}
					/>
				</div>
			</div>
		</>
	)
	
}

export default CreateCourse;