/*
Given an array arr[] of N nodes representing preorder traversal of some BST.
 You have to build the exact PostOrder from it's given preorder traversal. 
In Pre-Order traversal, .
N = 5
arr[] = {40,30,35,80,100}
35 30 100 80 40 PreOrder: 40 30 35 80 100
Therefore, the BST will be:
              40
           /      \
         30       80
           \        \   
           35      100
Hence, the postOrder traversal will
be: 35 30 100 80 40
N = 8
arr[] = {40,30,32,35,80,90,100,120}
35 32 30 120 100 90 80 40
 */
import java.util.ArrayList;
import java.util.Scanner;

public class PreOrderToPostOrder {
    static int INDEX; // INDEX is declared as a globel variable

    public static void convertPreToPost(int preOrder[],int n,int minVal,
    int maxVal,ArrayList<Integer> postOrder){
        if(INDEX == n || preOrder[INDEX] < minVal || preOrder[INDEX] > maxVal)
            return;

        int value = preOrder[INDEX];
        INDEX++;

        convertPreToPost(preOrder, n, minVal, value,postOrder);
        convertPreToPost(preOrder, n, value, maxVal,postOrder);
        postOrder.add(value);
    }

    public static ArrayList<Integer> preToPost(int preOrder[], int N){
        INDEX = 0; // Globally declared value is set to 0 for beginning the process
        ArrayList<Integer> postOrder = new ArrayList<>();
        convertPreToPost(preOrder, N, Integer.MIN_VALUE, Integer.MAX_VALUE,postOrder);
        return postOrder;
    }

    public static void printArrayList(ArrayList<Integer> postOrder){
        // printing the passed ArrayList
        for (int num : postOrder) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter the no of nodes: ");
        int N = scan.nextInt();
        System.out.println("Enter " + N + " numbers:");
        int preOrder[] = new int[N];
        for (int i = 0; i < preOrder.length; i++) {
            preOrder[i] = scan.nextInt();
        }
        System.out.print("Post order: ");
        printArrayList(preToPost(preOrder, N));
        scan.close();
    }
}
