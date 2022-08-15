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

class Traversal {
  //
  // Pre-order bejárás eredménye a példa adatokra:  [ 1, 2, 4, 3, 5, 6, 7 ]
  //
  preOrderTraversal(tree) {
    // TODO
  }

  //
  // Post-order bejárás eredménye a példa adatokra: [ 4, 2, 5, 7, 6, 3, 1 ]
  //
  postOrderTraversal(tree) {
    // TODO
  }
}
