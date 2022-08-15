package hu.ejogseged.challenge;

import java.util.*;

public class ArrayScanner
{
    private int[] array;

    //
    // Tedd lehetővé az osztály példányosítása során egy tömb (array) példány változóként történő beállítását.
    //
    public ArrayScanner( int[] array )
    {
        // TODO
    }

    public int[] getArray()
    {
        return array;
    }

    //
    // Készíts egy olyan asszociatív tömböt (HashMap<String, ArrayList>-et), aminek két kulcsa van a következőknek megfelelően:
    // { "paros" => [ ... ], "paratlan" => [ ... ] }
    // A "paros" kulcshoz kapcsolódó tömbbe a példányosítás során megadott tömbben (az objektum array változójában) szereplő páros számokat, a "paratlan" kulcshoz kapcsolódó tömbbe a példányosítás során megadott tömbben (az objektum array változójában) szereplő páratlan számokat kellene összegyűjteni.
    //
    public HashMap<String, ArrayList> evenAndOddNumbers()
    {
        return null; // TODO
    }

    //
    // Keresd meg a példányosítás során megadott tömbnek (az objektum array változójának) maximális értékű, páratlan elemét.
    // Ha nincs a tömbben páratlan szám, akkor a visszatérési érték legyen 0.
    //
    public int maximalOddNumber()
    {
        return 0; // TODO
    }

    //
    // Igaz az az állítás, miszerint a példányosítás során megadott tömbnek (az objektum array változójának) minden eleme osztható 3-mal?
    //
    public boolean allNumbersAreDividableBy3()
    {
        return false; // TODO
    }

    //
    // Definiálj egy olyan metódust, ami
    // * paraméterül kap egy pozitív egész számot (center) és
    // * előállít egy olyan (HashMap<Integer, Integer>) adatszerkezetet, ami tartalmazza, hogy a center változóban megadott szám (radius) 5 sugarú környezetében és a példányosítás során megadott tömbben (az objektum array változójában) is szereplő számok közül melyik hányszor szerepelt.
    //
    public HashMap<Integer, Integer> neighborhoodOfPoint(int center)
    {
        int radius = 5;
        return null; // TODO
    }
}
