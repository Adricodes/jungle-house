
import Banner from './Banner'
import Cart from './Cart'
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";

function App () {
	return (
		<div>
			<Banner />
			<Cart />
		</div>
	)
}

<form onSubmit={handleSubmit}>
    <input type='text' name='my_input' defaultValue='Type your text' />
    <button type='submit'>Enter</button>
</form>

function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}


export default App

