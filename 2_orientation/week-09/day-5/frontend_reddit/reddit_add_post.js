'use strict';

document.getElementById('title').select();

document.querySelector('a').addEventListener('click', getTitle);
window.addEventListener('keydown', (event) => {
	if (event.keyCode === 13) {
		getTitle()
	}
});

function getTitle() {
  let title = document.getElementById('title').value;
	getUrl(title);
};

function getUrl(title) {
  let url = document.getElementById('url').value;
	postRequest(title, url);
};

function postRequest(title, postUrl) {
	let leviUrl = 'https://time-radish.glitch.me/posts'
	let requestUrl = 'http://secure-reddit.herokuapp.com/simple/posts';
	let localUrl = 'http://localhost:8080/posts';
	let request = new XMLHttpRequest();
	request.open('POST', localUrl);
	request.setRequestHeader('Accept', 'application/json');
	request.setRequestHeader('Content-Type', 'application/json');
	let body = JSON.stringify({
		"title": title,
		"url": postUrl
	});
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
			window.location.href = 'http://localhost:8080/';
		};
	};
	request.send(body);
};
