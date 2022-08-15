using System;
using System.Collections.Generic;

//
// Készítsd el a megadott fa adatszerkezetet bejáró metódusokat:
//
// Példa kód:
//
//Dictionary<string, object> tree1 = new Dictionary<string, object>();
//tree1.Add("value", 1);
//Dictionary<string, object> tree2 = new Dictionary<string, object>();
//tree2.Add("value", 2);
//Dictionary<string, object> tree3 = new Dictionary<string, object>();
//tree3.Add("value", 3);
//Dictionary<string, object> tree4 = new Dictionary<string, object>();
//tree4.Add("value", 4);
//Dictionary<string, object> tree5 = new Dictionary<string, object>();
//tree5.Add("value", 5);
//Dictionary<string, object> tree6 = new Dictionary<string, object>();
//tree6.Add("value", 6);
//Dictionary<string, object> tree7 = new Dictionary<string, object>();
//tree7.Add("value", 7);
//List<Dictionary<string, object>> childrenOfTree1 = new List<Dictionary<string, object>>();
//childrenOfTree1.Add(tree2);
//childrenOfTree1.Add(tree3);
//tree1.Add("children", childrenOfTree1);
//List<Dictionary<string, object>> childrenOfTree2 = new List<Dictionary<string, object>>();
//tree2.Add("children", childrenOfTree2);
//List<Dictionary<string, object>> childrenOfTree3 = new List<Dictionary<string, object>>();
//childrenOfTree3.Add(tree5);
//childrenOfTree3.Add(tree6);
//tree3.Add("children", childrenOfTree3);
//List<Dictionary<string, object>> childrenOfTree4 = new List<Dictionary<string, object>>();
//tree4.Add("children", childrenOfTree4);
//List<Dictionary<string, object>> childrenOfTree5 = new List<Dictionary<string, object>>();
//tree5.Add("children", childrenOfTree5);
//List<Dictionary<string, object>> childrenOfTree6 = new List<Dictionary<string, object>>();
//childrenOfTree6.Add(tree7);
//tree6.Add("children", childrenOfTree6);
//List<Dictionary<string, object>> childrenOfTree7 = new List<Dictionary<string, object>>();
//tree7.Add("children", childrenOfTree7);
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

public class Travelsal
{
    //
    // Pre-order bejárás eredménye a példa adatokra:  [ 1, 2, 4, 3, 5, 6, 7 ]
    //
    public int[] preOrderTraversal(Dictionary<string, object> tree)
    {        
        return null; // TODO
    }

    //
    // Post-order bejárás eredménye a példa adatokra: [ 4, 2, 5, 7, 6, 3, 1 ]
    //
    public int[] postOrderTraversal(Dictionary<string, object> tree)
    {
        return null; // TODO
    }
}