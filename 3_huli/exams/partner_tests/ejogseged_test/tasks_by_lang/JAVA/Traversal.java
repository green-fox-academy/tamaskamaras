package hu.ejogseged.challenge;

import java.util.*;
import org.apache.commons.lang3.ArrayUtils;

//
// Készítsd el a megadott fa adatszerkezetet bejáró metódusokat:
//
// Példa kód:
//
// HashMap<String, Object> tree1 = new HashMap<String, Object>();
// tree1.put("value", 1);
// HashMap<String, Object> tree2 = new HashMap<String, Object>();
// tree2.put("value", 2);
// HashMap<String, Object> tree3 = new HashMap<String, Object>();
// tree3.put("value", 3);
// HashMap<String, Object> tree4 = new HashMap<String, Object>();
// tree4.put("value", 4);
// HashMap<String, Object> tree5 = new HashMap<String, Object>();
// tree5.put("value", 5);
// HashMap<String, Object> tree6 = new HashMap<String, Object>();
// tree6.put("value", 6);
// HashMap<String, Object> tree7 = new HashMap<String, Object>();
// tree7.put("value", 7);
// ArrayList<HashMap<String, Object>> childrenOfTree1 = new ArrayList<HashMap<String, Object>>();
// childrenOfTree1.add(tree2);
// childrenOfTree1.add(tree3);
// tree1.put("children", childrenOfTree1);
// ArrayList<HashMap<String, Object>> childrenOfTree2 = new ArrayList<HashMap<String, Object>>();
// childrenOfTree2.add(tree4);
// tree2.put("children", childrenOfTree2);
// ArrayList<HashMap<String, Object>> childrenOfTree3 = new ArrayList<HashMap<String, Object>>();
// childrenOfTree3.add(tree5);
// childrenOfTree3.add(tree6);
// tree3.put("children", childrenOfTree3);
// ArrayList<HashMap<String, Object>> childrenOfTree4 = new ArrayList<HashMap<String, Object>>();
// tree4.put("children", childrenOfTree4);
// ArrayList<HashMap<String, Object>> childrenOfTree5 = new ArrayList<HashMap<String, Object>>();
// tree5.put("children", childrenOfTree5);
// ArrayList<HashMap<String, Object>> childrenOfTree6 = new ArrayList<HashMap<String, Object>>();
// childrenOfTree6.add(tree7);
// tree6.put("children", childrenOfTree6);
// ArrayList<HashMap<String, Object>> childrenOfTree7 = new ArrayList<HashMap<String, Object>>();
// tree7.put("children", childrenOfTree7);
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

public class Traversal
{
    //
    // Pre-order bejárás eredménye a példa adatokra:  [ 1, 2, 4, 3, 5, 6, 7 ]
    //
    public int[] preOrderTraversal(HashMap<String, Object> tree)
    {
        return null; // TODO
    }

    //
    // Post-order bejárás eredménye a példa adatokra: [ 4, 2, 5, 7, 6, 3, 1 ]
    //
    public int[] postOrderTraversal(HashMap<String, Object> tree)
    {
        return null; // TODO
    }
}
