//
// Készítsd el a Node osztályt.
//
// Az osztály példányainak :id, :value, :parent_id attribútumokkal kell rendelkezni.
//
// Valósítsd meg a következő osztály metódusokat:
//   Node.findById(id)                # A paraméterül kapott id-val rendelkező csúccsal tér vissza.
//   Node.findAllByParentId(parentId) # A paraméterül kapott parent_id-val rendelkező csúcsok tömbjével tér vissza.
//
// Valósítsd meg a következő példány metódusokat:
//   Node#getParent               # A csúcs szülő csúcsával tér vissza. (pl.: a 3 értékű csúcs szülője az 1 értékű csúcs)
//   Node#getChildren             # A csúcs gyermekeivel tér vissza. (pl.: a 3 értékű csúcs gyermekei az 5 és a 6 értékű csúcsok)
//   Node#getDescendants          # A csúcs összes leszármazottját tartalmazó tömbbel tér vissza. (pl.: a 3 értékű csúcs leszármazottai az 5, 6, 7 értékű csúcsok)
//   Node#getSelfAndDescendants # A csúcsot és a csúcs összes leszármazottját tartalmazó tömbbel tér vissza.
//   Node#getAncestors          # A csúcs összes felmenőjét tartalmazó tömbbel tér vissza. (pl.: a 4 értékű csúcs felmenői az 1, 2 értékű csúcsok)
//   Node#getSelfAndAncestors   # A csúcsot és a csúcs összes felmenőjét tartalmazó tömbbel tér vissza.
//   Node#getSiblings           # A csúcs testvéreit tartalmazó tömbbel tér vissza. (pl.: a 2 értésű csúcs testvére a 3 értékű csúcs)
//   Node#getSelfAndSiblings    # A csúcsot és a csúcs testvéreit tartalmazó tömbbel tér vissza.
//
// A csúcsok (Node példányok) nyers adatai egy "adatbázis csonk" (DatabaseStub osztály) segítségével érhetőek el.
// A jelen feladatban nem cél az adatok módosítását lehetővé tenni, azaz az "adatbázisunkban szereplő adatok menet
// közben nem fognak változni.
//

class DatabaseStub {
  //
  // A nyers adatokat visszaadó metódus.
  //
  nodes() {
    return [
      { id: 1, value: 1 },
      { id: 2, value: 2, parentId: 1 },
      { id: 3, value: 3, parentId: 1 },
      { id: 4, value: 4, parentId: 2 },
      { id: 5, value: 5, parentId: 3 },
      { id: 6, value: 6, parentId: 3 },
      { id: 7, value: 7, parentId: 6 }
    ];
  }
}

//
// A megvalósított Node osztály segítségével fa adatszerkezetet lehet modellezni.
//
// A fenti adatokkal:
//
//                             +----------------+
//                             |       id:    1 |
//                             |    value:    1 |
//                             | parentId: null |
//                             +----------------+
//                               /           \
//                              /             \
//               +---------------+         +---------------+
//               |       id:   2 |         |       id:   3 |
//               |    value:   2 |         |    value:   3 |
//               | parentId:   1 |         | parentId:   1 |
//               +---------------+         +---------------+
//                  /                        /           \
//                 /                        /             \
//    +--------------+         +---------------+       +---------------+
//    |       id:  4 |         |       id:   5 |       |       id:   6 |
//    |    value:  4 |         |    value:   5 |       |    value:   6 |
//    | parentId:  2 |         | parentId:   3 |       | parentId:   3 |
//    +--------------+         +---------------+       +---------------+
//                                                       /
//                                                      /
//                                        +---------------+
//                                        |       id:   7 |
//                                        |    value:   7 |
//                                        | parentId:   6 |
//                                        +---------------+
//

class Node {

  constructor(object) {
    // TODO
  }

  static findById(id) {
    // TODO
  }

  static findAllByParentId(parentId) {
      // TODO
  }

  getParent() {
    // TODO
  }

  getChildren() {
    // TODO
  }

  getDescendants() {
    // TODO
  }

  getSelfAndDescendants() {
    // TODO
  }

  getAncestors() {
    // TODO
  }

  getSelfAndAncestors() {
    // TODO
  }

  getSiblings() {
    // TODO
  }

  getSelfAndSiblings() {
    // TODO
  }

  equals(other) {
    var self = this;
    return [ "id", "value", "parent_id" ].every(function(attribute_name) {
      return self[attribute_name] == other[attribute_name];
    });
  }
}
