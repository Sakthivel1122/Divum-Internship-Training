import java.util.Scanner;

/**
 * Problem1
 */
public class Problem1 {

    public static void main(String[] args) {
        int num = 5;
        while (num > 0) {
            System.out.println(num);
            num--;
        }
        System.out.println("---");
        System.out.println((int)(Math.random() * 11));
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter No: ");
        // int num = scan.nextInt();
        scan.nextLine();
        System.out.print("Enter str: ");
        String str = scan.next();
        scan.nextLine();
        System.out.print("Enter num2: ");
        String str2 = scan.nextLine();
        System.out.println("Number:" + num);
        System.out.println("Str 2: "+str2);
        System.out.println("String " + str);
        System.out.println("Hello World");
        scan.close();
    }
}




