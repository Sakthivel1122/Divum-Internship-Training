import java.util.Scanner;

public class Problem {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter: ");
        int rows = scan.nextInt();
        for (int i = 1; i <= rows; i++) {
            for (int j = rows; j > i; j--) {
                System.out.print(" ");
            }
            System.out.print('1');
            for (int j = 1; j < (i - 1) * 2; j++) {
                System.out.print(" ");
            }
            if (i == 1) {
                System.out.print("\n");
            } else {
                System.out.print('1' + "\n");
            }
        }
        for (int i = rows - 1; i >= 1; i--) {
            for (int j = rows; j > i; j--) {
                System.out.print(" ");
            }
            System.out.print('1');
            for (int j = 1; j < (i - 1) * 2; j++) {
                System.out.print(" ");
            }
            if (i == 1) {
                System.out.print("\n");
            } else {
                System.out.print('1' + "\n");
            }
        }
    }
}