import React from "react";
import data from "./data"
export default function Form() {

    const [memeImage, setMemeImage] = React.useState({
        "topText": "",
        "bottomText": "",
        "image": "http://i.imgflip.com/1bij.jpg",
    });
    const [allImages, setAllImages] = React.useState(data.data.memes);
    function randomImage(){
        let randomIndex = Math.floor(Math.random() * allImages.length)

        let randomImage = allImages[randomIndex].url
        setMemeImage((prevMemeImage) =>{
            return {
                ...prevMemeImage,
                "image": randomImage
            }
        });
    } 
	return (
		<section className="meme-form">
			<div className="meme-cont">
				<div className="inputs">
					<input type="text" placeholder="Enter top text" />
					<input type="text" placeholder="Enter Bottom text" />
				</div>
				<button onClick={ randomImage }>Generate a new meme image</button>

                <img src={ memeImage.image } />
			</div>
		</section>
	);
}
