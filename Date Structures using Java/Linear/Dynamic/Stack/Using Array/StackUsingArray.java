import java.util.Scanner;

public class StackUsingArray {
    public int size = 10;
    public int stack[] = new int[size];
    public int top = -1;

    public void push(int data) {
        if (top == size - 1) {
            System.out.println("Stack Overflow");
            return;
        }
        top++;
        stack[top] = data;
    }

    public void pop() {
        if (top == -1) {
            System.out.println("Stack Underflow");
            return;
        }
        System.out.println("Poped element: " + stack[top]);
        top--;
    }

    public int peek() {
        return stack[top];
    }

    public void display() {
        if (top == -1) {
            System.out.println("Stack is empty");
            return;
        }
        System.out.println("Elements in stack");
        for (int i = top; i >= 0; i--) {
            System.out.println(stack[i]);
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        StackUsingArray stack = new StackUsingArray();
        boolean flag = true;
        int choise, data;
        while (flag) {
            System.out.println("1.Push\n2.Pop\n3.Peek\n4.Display\n5.Exit");
            System.out.print("Enter your choise: ");
            choise = scan.nextInt();
            switch (choise) {
                case 1:
                    data = scan.nextInt();
                    stack.push(data);
                    break;
                case 2:
                    stack.pop();
                    break;
                case 3:
                    System.out.println(stack.peek());
                    break;
                case 4:
                    stack.display();
                    break;
                case 5:
                    flag = false;
                    break;
                default:
                    System.out.println("Please enter a valid option!!!");
            }
        }
        scan.close();
    }
}
