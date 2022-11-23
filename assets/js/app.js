"use strict";
 
 
import { multi } from './air-port-codes-node';
import { ui } from './ui';
 


// search airport
const searchAirport = document.querySelector("#search");


// add event listeners
searchAirport.addEventListener("keyup", (e) => {

	ui.inputSpinner();

	// get user input
	const input = e.target.value;

	if (input === ''){
		// guard clause
		return;

	} 
	
	// make call to API
	const api = multi({
		key: "ac878c3dc7",
		secret: "f3056d854727c40",
		limit: 20 
	});

	api.request(input);


	// handle success
	api.onSuccess = (data) => {
		ui.showResults(data);
	}


	// handle error
	api.onError = (data) => {
		ui.showAlert(data);
		console.error("onError..", data.message);
	}

});
