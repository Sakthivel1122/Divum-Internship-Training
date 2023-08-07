import java.util.Scanner;

public class QueueUsingArray {
    public int size = 10;
    public int queue[] = new int[10];
    public int front, rear = -1;

    public void enqueue(int data) {
        if (rear == size - 1) {
            System.out.println("Queue is full");
            return;
        } else if (rear == -1) {
            front = 0;
        }
        rear++;
        queue[rear] = data;
    }

    public void dequeue() {
        if (rear == -1) {
            System.out.println("Queue is empty");
            return;
        }
        System.out.println("Deleted element: " + queue[front]);
        for (int i = front; i < rear; i++) {
            queue[i] = queue[i + 1];
        }
        rear--;
        if (rear == -1)
            front = -1;
    }

    public void display() {
        if (rear == -1) {
            System.out.println("Queue is empty");
            return;
        }
        System.out.println("Elements in Queue:");
        for (int i = front; i <= rear; i++) {
            System.out.print(queue[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        QueueUsingArray queue = new QueueUsingArray();
        boolean flag = true;
        int choise, data;
        while (flag) {
            System.out.println("1.Enqueue\n2.Dequeue\n3.Display\n4.Exit");
            System.out.print("Enter your choise: ");
            choise = scan.nextInt();
            switch (choise) {
                case 1:
                    data = scan.nextInt();
                    queue.enqueue(data);
                    break;
                case 2:
                    queue.dequeue();
                    break;
                case 3:
                    queue.display();
                    break;
                case 4:
                    flag = false;
                    break;
                default:
                    System.out.println("Please enter a valid option!!!");
            }
        }
        scan.close();
    }
}
