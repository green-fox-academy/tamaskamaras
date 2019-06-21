// - Create a variable named `nimals`
//   with the following content: `["kuty", "macsk", "cic"]`
// - Add all elements an `"a"` at the end
// - try to use built in functions instead of loops

'use strict'

let nimals = ["kuty", "macsk", "cic"];

nimals.forEach(function(e, i) {
    e += 'a'
    console.log(e)
});

console.log(nimals);

///////////////////////////

nimals = nimals.map(a => a + 'a');

console.log(nimals);
