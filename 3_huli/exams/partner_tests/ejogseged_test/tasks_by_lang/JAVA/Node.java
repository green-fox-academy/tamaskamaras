package hu.ejogseged.challenge;

import java.util.*;

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

    public Node(HashMap<String, Integer> data)
    {
        // TODO
    }

    public static class DatabaseStub
    {
        //
        // A nyers adatokat visszaadó metódus.
        //
        public ArrayList<HashMap<String, Integer>> nodes()
        {
            ArrayList<HashMap<String, Integer>> results = new ArrayList<HashMap<String, Integer>>();
            HashMap<String, Integer> data1 = new HashMap<String, Integer>();
            data1.put("id", 1);
            data1.put("value", 1);
            data1.put("parentId", 0);
            results.add(data1);
            HashMap<String, Integer> data2 = new HashMap<String, Integer>();
            data2.put("id", 2);
            data2.put("value", 2);
            data2.put("parentId", 1);
            results.add(data2);
            HashMap<String, Integer> data3 = new HashMap<String, Integer>();
            data3.put("id", 3);
            data3.put("value", 3);
            data3.put("parentId", 1);
            results.add(data3);
            HashMap<String, Integer> data4 = new HashMap<String, Integer>();
            data4.put("id", 4);
            data4.put("value", 4);
            data4.put("parentId", 2);
            results.add(data4);
            HashMap<String, Integer> data5 = new HashMap<String, Integer>();
            data5.put("id", 5);
            data5.put("value", 5);
            data5.put("parentId", 3);
            results.add(data5);
            HashMap<String, Integer> data6 = new HashMap<String, Integer>();
            data6.put("id", 6);
            data6.put("value", 6);
            data6.put("parentId", 3);
            results.add(data6);
            HashMap<String, Integer> data7 = new HashMap<String, Integer>();
            data7.put("id", 7);
            data7.put("value", 7);
            data7.put("parentId", 6);
            results.add(data7);

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

    public static ArrayList<Node> findAllByParentId(int parentId)
    {
        return null; // TODO
    }

    public Node getParent()
    {
        return null; // TODO
    }

    public ArrayList<Node> getChildren()
    {
        return null; // TODO
    }

    public ArrayList<Node> getDescendants()
    {
        return null; // TODO
    }

    public ArrayList<Node> getSelfAndDescendants()
    {
        return null; // TODO
    }

    public ArrayList<Node> getAncestors()
    {
        return null; // TODO
    }

    public ArrayList<Node> getSelfAndAncestors()
    {
        return null; // TODO
    }

    public ArrayList<Node> getSiblings()
    {
        return null; // TODO
    }

    public ArrayList<Node> getSelfAndSiblings()
    {
        return null; // TODO
    }

    @Override
    public boolean equals(Object object)
    {
        if( object instanceof Node )
        {
            Node other = (Node) object;
            return ( id == other.getId() ) &&
                   ( value == other.getValue() ) &&
                   ( parentId == other.getParentId() );
        }
        return false;
    }
}
