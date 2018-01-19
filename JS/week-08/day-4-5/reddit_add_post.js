'use strict';

document.querySelector('a').addEventListener('click', getTitle);

function getTitle() {
  let title = document.getElementById('title').value;
	getUrl(title);
};

function getUrl(title) {
  let url = document.getElementById('url').value;
	postRequest(title, url);
};

function postRequest(title, postUrl) {
	let requestUrl = 'http://secure-reddit.herokuapp.com/simple/posts';
	let request = new XMLHttpRequest();
	request.open('POST', requestUrl);
	request.setRequestHeader('Accept', 'application/json');
	request.setRequestHeader('Content-Type', 'application/json');
	let body = JSON.stringify({
		"title": title,
		"url": postUrl
	});
	console.log(body);
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
			console.log(request);
		};
	};
	request.send(body);
};
