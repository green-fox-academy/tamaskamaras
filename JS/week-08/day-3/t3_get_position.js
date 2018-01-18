'use strict';

document.querySelector('button').addEventListener('click', getInput);

function getInput() {
    let input = document.getElementById('input1').value;
    console.log(input);
    request(input);
}

function request(city) {
    let coordinateRequest = new XMLHttpRequest();
    let url = 'https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location='
    // let mashapeApiKey = 'QiM9uMx4zmmshefk5m4d0wSGPEDqp1g7jwkjsnVhlozRqKsoS6';
    // let mashapeApiKey = 'AGA0Lh7DqKmshEgT1Rr5HjR3XJhgp1ZRWdnjsntoYwVx5GaYun';
    let mashapeApiKey = 'uyFKkGLBA2mshZzbRW7rezal9uxpp1hojMSjsnbh4DVzglRhph';
    coordinateRequest.open('GET', url + city);
    coordinateRequest.setRequestHeader('X-Mashape-Key', mashapeApiKey);
    coordinateRequest.setRequestHeader('Accept', 'application/json');
    coordinateRequest.send();
    coordinateRequest.onreadystatechange = function() {
        console.log(coordinateRequest);
        if (coordinateRequest.readyState === 4) {
            let latitude;
            let longitude;
            getGoogleRequest(latitude, longitude);
        };
    };
};

function getGoogleRequest(latitude, longitude) {
    let googleRequest = new XMLHttpRequest();
    let googleUrl = 'https://www.google.com/maps/embed/v1/view?key=';
    let googleApiKey = 'AIzaSyD1yZtmkTRI7GIWOBC5K3p24-Nz4HJd65Q';
    let center = '&center' + latitude + ',' + longitude;
    let zoom = '&zoom' + 15;
    // let maptype = '&maptype=roadmap';
    let embed = googleUrl + googleApiKey + center + zoom;
    googleRequest.open('GET', embed);
    googleRequest.send();
    googleRequest.onreadystatechange = function() {
        if (googleRequest.readyState === 4) {
            console.log(googleRequest);
            document.querySelector('iframe').setAttribute('src', embed);
        };
    };
};
