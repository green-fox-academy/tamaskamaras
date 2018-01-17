'use strict';

// Article Search API: 50d785df66334c9780725773581c3bca

let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Apollo+11+moon+landing&api_key=50d785df66334c9780725773581c3bca');
myRequest.send();
myRequest.onreadystatechange = function() {
    let article = [];
    if (myRequest.readyState === 4) {
        console.log(JSON.parse(myRequest.response).response.docs[0]);
        // document.write(JSON.parse(myRequest.response).response.docs[0].web_url);
        let link = (JSON.parse(myRequest.response).response.docs[0].web_url);
        let temp = JSON.parse(myRequest.response).response.docs[0];
        article.push(temp.headline.main);
        // console.log('Article logging:', article);
        permalink(link);
    };
};

function permalink(link) {
    let permalink = document.createElement('a');
    permalink.setAttribute('href', link);
    permalink.textContent = link;
    document.querySelector('body').appendChild(permalink);
}