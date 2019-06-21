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

'use strict';

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
    this.object = object;
    this.id = 0;
    this.value = 0;
    this.parent_id = 0;
  }

  static findById(id) {
    let newData = new DatabaseStub;
    let peak = newData.nodes().filter((peak) => peak.id === id);
    return peak[0];
  }

  static findAllByParentId(parentId) {
    let newData = new DatabaseStub;
    return newData.nodes().filter((peak) => peak.parentId === parentId);
  }

  getParent(id) {
    let currentPeak = this.object.filter((peak) => peak.id === id);
    return currentPeak[0].parentId;
  }

  getChildren(id) {
    return this.object.filter((peak) => peak.parentId === id);
  }

  getDescendants(id) {
    return this.object.filter((peak) => peak.parentId >= id);
  }

  getSelfAndDescendants(id) {
    return this.object.filter((peak) => peak.parentId >= id || peak.id === id);
  }

  getAncestors(value) {
    let basePeak = this.object.filter((peak) => peak.value === value);
    return this.object.filter((peak) => peak.value <= basePeak[0].parentId);
  }

  getSelfAndAncestors(value) {
    let result = this.object.filter((peak) => peak.value === value);
    this.object.forEach((peak) => {
      if (peak.value <= result[0].parentId) {
        result.push(peak);
      }
    });
    return result;
  }

  getSiblings(value) {
    let basePeak = this.object.filter((peak) => peak.value === value);
    return this.object.filter((peak) => peak.parentId === basePeak[0].parentId && peak.value !== value);
  }

  getSelfAndSiblings(value) {
    let basePeak = this.object.filter((peak) => peak.value === value);
    return this.object.filter((peak) => peak.parentId === basePeak[0].parentId);
  }

  equals(other) {
    let self = this;
    return [ "id", "value", "parent_id" ].every(function(attribute_name) {
      return self[attribute_name] == other[attribute_name];
    });
  }
}

let myData = new DatabaseStub;
let myNode = new Node(myData.nodes());
console.log(Node.findById(4));
console.log(Node.findAllByParentId(3));
// console.log(myNode.getParent(3));
// console.log(myNode.getChildren(3));
// console.log(myNode.getDescendants(3));
// console.log(myNode.getSelfAndDescendants(3));
// console.log(myNode.getAncestors(4));
// console.log(myNode.getSelfAndAncestors(4));
// console.log(myNode.getSiblings(2));
// console.log(myNode.getSelfAndSiblings(2));
