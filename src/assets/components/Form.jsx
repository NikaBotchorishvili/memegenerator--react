import React, { useState, useEffect } from "react";
export default function Form() {
	const [allMemes, setAllMemes] = useState({});

	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		image: "",
	});

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then(res => res.json())
			.then(data => setAllMemes(data.data.memes));
	}, []);

	const [memeText, setMemeText] = useState({
		topText: "",
		bottomText: "",
	});

	function randomImage() {
		let randomIndex = Math.floor(Math.random() * allMemes.length);

		let randomImage = allMemes[randomIndex].url;
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				image: randomImage,
			};
		});
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setMemeText((prevMemeText) => {
			return {
				...prevMemeText,
				[name]: value,
			};
		});
	}
	return (
		<>
			{" "}
			<section className="meme-form">
				<div className="meme-cont">
					<div className="inputs">
						<input
							onChange={handleChange}
							value={memeText.topText}
							name="topText"
							type="text"
							placeholder="Enter top text"
						/>
						<input
							onChange={handleChange}
							value={memeText.bottomText}
							name="bottomText"
							type="text"
							placeholder="Enter Bottom text"
						/>
					</div>
					<button onClick={randomImage}>Generate a new meme image</button>
				</div>
			</section>
			<div className="meme">
				<img src={meme.image} className="meme--image" />
				<h2 className="meme--text top">{memeText.topText}</h2>
				<h2 className="meme--text bottom">{memeText.bottomText}</h2>
			</div>
		</>
	);
}
