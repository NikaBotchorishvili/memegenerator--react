import React from "react";
import Logo from "../images/logo.svg";
export default function Navbar() {
	return (
		<header>
			<div className="container">
				<div className="logo">
					<img src={Logo} alt="logo" />
					<h1>Meme Generator</h1>
				</div>
				<h2>React Course - Project 3</h2>
			</div>
		</header>
	);
}
