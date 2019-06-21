//
// Készítsd el a megadott fa adatszerkezetet bejáró metódusokat:
//
// Példa kód:
//
// tree = { value: 1, children: [
//          { value: 2, children: [
//            { value: 4, children: [] } ] },
//          { value: 3, children: [
//            { value: 5, children: [] },
//            { value: 6, children: [
//              { value: 7, children: [] } ] } ] } ] }
//
// Példa ábra:
//
//                             +----------------+
//                             |     value:   1 |
//                             +----------------+
//                               /            \
//                              /              \
//               +----------------+        +----------------+
//               |     value:   2 |        |     value:   3 |
//               +----------------+        +----------------+
//                  /                         /           \
//                 /                         /             \
//    +----------------+       +----------------+       +----------------+
//    |     value:   4 |       |     value:   5 |       |     value:   6 |
//    +----------------+       +----------------+       +----------------+
//                                                           /
//                                                          /
//                                            +----------------+
//                                            |     value:   7 |
//                                            +----------------+
//

'use strict';

const tree = { value: 1, children: [
         { value: 2, children: [
           { value: 4, children: [] } ] },
         { value: 3, children: [
           { value: 5, children: [] },
           { value: 6, children: [
             { value: 7, children: [] } ] } ] } ] };

class Traversal {
  //
  // Pre-order bejárás eredménye a példa adatokra:  [ 1, 2, 4, 3, 5, 6, 7 ]
  //
  constructor() {
    this.valuesPreOrder = [];
    this.valuesPostOrder = [];
  }
  preOrderTraversal(tree) {
    for (let key in tree) {
      if (typeof tree[key] == 'object' && tree[key] !== null) {
        this.preOrderTraversal(tree[key]);
      } else {
        this.valuesPreOrder.push(tree[key]);
      }
    }
    return this.valuesPreOrder;
  }

  //
  // Post-order bejárás eredménye a példa adatokra: [ 4, 2, 5, 7, 6, 3, 1 ]
  //
  postOrderTraversal(tree) {
    for (let key in tree) {
      if (typeof tree[key] == 'object') {
        this.postOrderTraversal(tree[key]);
      }
    }
    if (tree['value']) {
      this.valuesPostOrder.push(tree['value']);
    }
    return this.valuesPostOrder;
  }
}

let myTraversal = new Traversal;

console.log(myTraversal.preOrderTraversal(tree));
console.log(myTraversal.postOrderTraversal(tree));
