'use strict';

let gifs;

let myRequest = new XMLHttpRequest();
let apiKey = '4THYAMP8VTe53hQsHfxn4sjX0ouo1Uxm'
myRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=4THYAMP8VTe53hQsHfxn4sjX0ouo1Uxm&limit=16');
myRequest.onreadystatechange = function() {
	let temp;
	if (myRequest.readyState === 4) {
			temp = JSON.parse(myRequest.response).data;
			logGifs(temp);
	};
};
myRequest.send();

let logGifs = function(temp) {
	gifs = temp;
	for (let i in gifs) {
			generateThumbs(i);
	};
};

function generateThumbs(i) {
	let box = document.createElement('a');
	box.setAttribute('href', '#');
	let img = document.createElement('img');
	document.querySelector('main').appendChild(box);
	document.querySelector('body').appendChild(img);
	box.textContent = gifs[i].images.downsized_large.url;
	box.addEventListener('click', displayGif);
};

function displayGif() {
	document.querySelector('img').setAttribute('src', gifs[0].images.downsized_large.url);
	document.querySelector('a').textContent = '';
};
