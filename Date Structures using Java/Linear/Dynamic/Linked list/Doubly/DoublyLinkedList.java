import java.util.Scanner;

public class DoublyLinkedList {
    class Node {
        int data;
        Node prev;
        Node next;

        Node(int data) {
            this.data = data;
            this.prev = null;
            this.next = null;
        }
    }

    Node head, tail = null;
    int node_count = 0;

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
            newNode.prev = tail;
            tail = newNode;
        }
        node_count++;
    }

    public void insertAt(int pos, int data) {
        Node newNode = new Node(data);
        Node temp = head;
        if (pos == 0) {
            newNode.next = head;
            head.prev = newNode;
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
        newNode.next.prev = newNode;
        temp.next = newNode;
        newNode.prev = temp;
    }

    public void deleteAt(int pos) {
        if (pos == 0) {
            head = head.next;
            head.prev = null;
            return;
        } else if (pos == node_count - 1) {
            Node temp = head;
            for (int i = 0; i < pos - 1; i++) {
                temp = temp.next;
            }
            temp.next = null;
            return;
        } else if (pos >= node_count) {
            System.out.println("Position out of bound");
            return;
        }
        Node temp = head;
        for (int i = 0; i < pos - 1; i++) {
            temp = temp.next;
        }
        temp.next = temp.next.next;
        temp.next.prev = temp;
    }

    public void display() {
        Node temp = head;
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        System.out.println("Elements in the list: ");
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        DoublyLinkedList dList = new DoublyLinkedList();
        // SinglyLinkedList list = new SinglyLinkedList();
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
                    dList.create(n);
                    break;
                case 2:
                    System.out.print("Enter data to insert: ");
                    data = scan.nextInt();
                    dList.insert(data);
                    break;
                case 3:
                    System.out.print("Enter position to insert data: ");
                    pos = scan.nextInt();
                    System.out.print("Enter data to insert: ");
                    data = scan.nextInt();
                    dList.insertAt(pos, data);
                    break;
                case 4:
                    dList.display();
                    System.out.print("Enter position to delete data: ");
                    pos = scan.nextInt();
                    dList.deleteAt(pos);
                    break;
                case 5:
                    dList.display();
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
