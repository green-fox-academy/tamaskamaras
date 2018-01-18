'use strict';

let myRequest = new XMLHttpRequest();
let apiKey = '50d785df66334c9780725773581c3bca';
myRequest.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Apollo+11+moon+landing&api_key=50d785df66334c9780725773581c3bca');
myRequest.onreadystatechange = function() {
	let article = [];
	if (myRequest.readyState === 4) {
		let link = (JSON.parse(myRequest.response).response.docs[0].web_url);
		let temp = JSON.parse(myRequest.response).response.docs[0];
		article.push(temp.headline.main);
		permalink(link);
	};
};
myRequest.send();

function permalink(link) {
	let permalink = document.createElement('a');
	permalink.setAttribute('href', link);
	permalink.textContent = link;
	document.querySelector('body').appendChild(permalink);
};
