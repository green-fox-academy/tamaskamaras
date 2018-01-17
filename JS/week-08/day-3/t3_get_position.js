'use strict';


document.querySelector('button').addEventListener('click', getInput);

function getInput() {
    let input = document.getElementById('input1').value;
    console.log(input);
    request(input);
}

function request(city) {
    let myRequest = new XMLHttpRequest();
    let url = 'https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location='
    let apiKey = 'QiM9uMx4zmmshefk5m4d0wSGPEDqp1g7jwkjsnVhlozRqKsoS6';
    myRequest.open('GET', url + city);
    myRequest.setRequestHeader('X-Mashape-Key', apiKey);
    myRequest.setRequestHeader('Accept', 'application/json');
    myRequest.send();
    myRequest.onreadystatechange = function() {
        if (myRequest.readyState === 4) {
            console.log(myRequest);
        };
    };
};
