'use strict';


const Eminem = {
    name: 'Slim shady',
    speak: function () {
        document.querySelector('h1').textContent = Eminem.name;
        // 1) Update the <h1> node text to this.name
    }
}
// 2) Add a click event on the button and assign Eminem.speak to it
// Don't use a wrapper function

document.querySelector('button').addEventListener('click', Eminem.speak);
