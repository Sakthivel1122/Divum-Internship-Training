import java.util.LinkedList;

public class Singly_list {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<Integer>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);

        System.out.println(list);

        for (int ele : list) {
            System.out.println(ele);
        }
        
    }
}
