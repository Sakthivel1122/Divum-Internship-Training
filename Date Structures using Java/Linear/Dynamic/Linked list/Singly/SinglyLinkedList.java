import java.util.Scanner;

public class SinglyLinkedList {
    class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    public int node_count = 0;
    public Node head = null;
    public Node tail = null;

    Scanner scan = new Scanner(System.in);

    public void create(int no_of_nodes) {
        for (int i = 0; i < no_of_nodes; i++) {
            System.out.print("Enter data: ");
            int data = scan.nextInt();
            insert(data);
        }
    }

    public void insert(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
        node_count++;
    }

    public void deleteAt(int pos) {
        if (pos >= node_count) {
            System.out.println("Position out of bound");
            return;
        } else if (pos == 0) {
            head = head.next;
            return;
        }
        Node temp = head;
        for (int i = 0; i < pos - 1; i++) {
            temp = temp.next;
        }
        temp.next = temp.next.next;
    }

    public void insertAt(int pos, int data) {
        Node newNode = new Node(data);
        Node temp = head;
        if (pos == 0) {
            newNode.next = head;
            head = newNode;
            return;
        } else if (pos >= node_count) {
            System.out.println("Position out of bound");
            return;
        }
        for (int i = 0; i < pos - 1; i++) {
            temp = temp.next;
        }
        newNode.next = temp.next;
        temp.next = newNode;
        node_count++;
    }

    public void display() {
        Node temp = head;
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        System.out.println("Nodes of singly linked list:");
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        SinglyLinkedList list = new SinglyLinkedList();
        int choise, data, pos;
        boolean flag = true;
        while (flag) {
            System.out.println("Choose an option:");
            System.out.println("1.Create\n2.Insert\n3.InsertAt\n4.DeleteAt\n5.Display\n6.Exit");
            choise = scan.nextInt();
            switch (choise) {
                case 1:
                    System.out.print("Enter no of nodes to create: ");
                    int n = scan.nextInt();
                    list.create(n);
                    break;
                case 2:
                    System.out.print("Enter data to insert: ");
                    data = scan.nextInt();
                    list.insert(data);
                    break;
                case 3:
                    System.out.print("Enter position to insert data: ");
                    pos = scan.nextInt();
                    System.out.print("Enter data to insert: ");
                    data = scan.nextInt();
                    list.insertAt(pos, data);
                    break;
                case 4:
                    list.display();
                    System.out.print("Enter position to delete data: ");
                    pos = scan.nextInt();
                    list.deleteAt(pos);
                    break;
                case 5:
                    list.display();
                    break;
                case 6:
                    flag = false;
                    break;
                default:
                    System.out.println("Please enter a valid option");
                    break;
            }
        }
        scan.close();
    }
}
