class MyClassOne {
    public void methOne() {
        System.out.println("One");
    }

    public void methTwo() {
        System.out.println("Two");
    }
}

public class MyClasses {
    public static void main(String[] args) {
        // MyClassOne obj = new MyClassOne();
        // obj.methOne();
        // obj.methTwo();
        // System.out.println(Integer.MAX_VALUE);
        // System.out.println(Integer.MIN_VALUE);
        // System.out.println((int) 'a');
        // System.out.println(Math.PI);
        // System.out.println("Abc".toLowerCase());
        // System.out.println("abc".toUpperCase());
        // System.out.println(">>");
        // String strArr[] = "abcdef".split("c", 1);
        // System.out.println(strArr.length);
        // System.out.println(strArr[0]);
        // for (int i = 0; i < strArr.length; i++) {
        // System.out.print(strArr[i]);
        // }
        // System.out.println("abccdefab".replace("c", "a"));
        // System.out.println("a".isEmpty());
        // System.out.println("abcdef".split("[a-z]"));
        String str = "a-cdc-fc";
        String strArr2[] = str.split("-");
        for (String s : strArr2) {
            System.out.println(s);
        }
        System.out.println("w3schools".substring(0, 5));
        System.out.println((char) ("Sakthivel".charAt(0)));
        System.out.println(("abc".getClass().getName()).endsWith("String"));
        StringBuffer sb = new StringBuffer("AAABBBCCC");
        sb.append("abc");
        System.out.println(sb.substring(0,sb.length()));
        sb.insert(0, "abc");
        System.out.println(sb);
    }
}
