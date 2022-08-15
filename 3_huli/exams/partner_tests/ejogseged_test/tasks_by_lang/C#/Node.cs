using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NodeTest
{
    //
    // Készítsd el a Node osztályt.
    //
    // Az osztály példányainak :id, :value, :parent_id attribútumokkal kell rendelkezni.
    //
    // Valósítsd meg a következő osztály metódusokat:
    //   Node.findById(id)                # A paraméterül kapott id-val rendelkező csúccsal tér vissza.
    //   Node.findAllByParentId(parentId) # A paraméterül kapott parentId-val rendelkező csúcsok tömbjével tér vissza.
    //
    // Valósítsd meg a következő példány metódusokat:
    //   Node#getParent             # A csúcs szülő csúcsával tér vissza. (pl.: a 3 értékű csúcs szülője az 1 értékű csúcs)
    //   Node#getChildren           # A csúcs gyermekeivel tér vissza. (pl.: a 3 értékű csúcs gyermekei az 5 és a 6 értékű csúcsok)
    //   Node#getDescendants        # A csúcs összes leszármazottját tartalmazó tömbbel tér vissza. (pl.: a 3 értékű csúcs leszármazottai az 5, 6, 7 értékű csúcsok)
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

    public class Node
    {
        private int id;
        private int value;
        private int parentId;

        public Node(Dictionary<String, int> data)
        {
            // TODO
        }

        public static class DatabaseStub
        {
            //
            // A nyers adatokat visszaadó metódus.
            //
            public static List<Dictionary<String, int>> nodes()
            {
                List<Dictionary<String, int>> results = new List<Dictionary<String, int>>();
                Dictionary<String, int> data1 = new Dictionary<String, int>();
                data1.Add("id", 1);
                data1.Add("value", 1);
                data1.Add("parentId", 0);
                results.Add(data1);
                Dictionary<String, int> data2 = new Dictionary<String, int>();
                data2.Add("id", 2);
                data2.Add("value", 2);
                data2.Add("parentId", 1);
                results.Add(data2);
                Dictionary<String, int> data3 = new Dictionary<String, int>();
                data3.Add("id", 3);
                data3.Add("value", 3);
                data3.Add("parentId", 1);
                results.Add(data3);
                Dictionary<String, int> data4 = new Dictionary<String, int>();
                data4.Add("id", 4);
                data4.Add("value", 4);
                data4.Add("parentId", 2);
                results.Add(data4);
                Dictionary<String, int> data5 = new Dictionary<String, int>();
                data5.Add("id", 5);
                data5.Add("value", 5);
                data5.Add("parentId", 3);
                results.Add(data5);
                Dictionary<String, int> data6 = new Dictionary<String, int>();
                data6.Add("id", 6);
                data6.Add("value", 6);
                data6.Add("parentId", 3);
                results.Add(data6);
                Dictionary<String, int> data7 = new Dictionary<String, int>();
                data7.Add("id", 7);
                data7.Add("value", 7);
                data7.Add("parentId", 6);
                results.Add(data7);

                return results;
            }
            //
            // A megvalósított Node osztály segítségével fa adatszerkezetet lehet modellezni.
            //
            // A fenti adatokkal:
            //
            //                             +---------------+
            //                             |       id:   1 |
            //                             |    value:   1 |
            //                             | parentId: nil |
            //                             +---------------+
            //                               /            \
            //                              /              \
            //               +---------------+          +---------------+
            //               |       id:   2 |          |       id:   3 |
            //               |    value:   2 |          |    value:   3 |
            //               | parentId:   1 |          | parentId:   1 |
            //               +---------------+          +---------------+
            //                  /                         /           \
            //                 /                         /             \
            //    +---------------+         +---------------+       +---------------+
            //    |       id:   4 |         |       id:   5 |       |       id:   6 |
            //    |    value:   4 |         |    value:   5 |       |    value:   6 |
            //    | parentId:   2 |         | parentId:   3 |       | parentId:   3 |
            //    +---------------+         +---------------+       +---------------+
            //                                                           /
            //                                                          /
            //                                            +---------------+
            //                                            |       id:   7 |
            //                                            |    value:   7 |
            //                                            | parentId:   6 |
            //                                            +---------------+
            //
        }

        public int getId()
        {
            return id;
        }

        public int getValue()
        {
            return value;
        }

        public int getParentId()
        {
            return parentId;
        }

        public static Node findById(int id)
        {
            return null; // TODO
        }

        public static List<Node> findAllByParentId(int parentId)
        {
            return null; // TODO
        }

        public Node getParent()
        {
            return null; // TODO
        }

        public List<Node> getChildren()
        {
            return null; // TODO
        }

        public List<Node> getDescendants()
        {
            return null; // TODO
        }

        public List<Node> getSelfAndDescendants()
        {
            return null; // TODO
        }

        public List<Node> getAncestors()
        {
            return null; // TODO
        }

        public List<Node> getSelfAndAncestors()
        {
            return null; // TODO
        }

        public List<Node> getSiblings()
        {
            return null; // TODO
        }

        public List<Node> getSelfAndSiblings()
        {
            return null; // TODO
        }

        public override bool Equals(object obj)
        {
            if (obj.GetType() == typeof(Node)){
                Node other = (Node) obj;
                return (id == other.getId()) &&
                       (value == other.getValue()) &&
                       (parentId == other.getParentId());
            }
            return false;
        }

    }

}
