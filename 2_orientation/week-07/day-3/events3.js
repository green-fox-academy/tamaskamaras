'use strict';

window.addEventListener('keydown', function(event) {
    document.querySelector('h1').textContent = 'Last pressed key code is: ' + event.keyCode;
});

