import java.util.Scanner;

public class Problem2 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter: ");
        int num = scan.nextInt();

        int space = num + (num - 1);
        boolean once = true;
        for (int i = 1; i <= num; i++) {
            for (int j = 1; j <= space; j++) {
                System.out.print(" ");
            }
            if (once) {
                once = false;
                space--;
            }
            space--;
            if (i == 1) {
                System.out.println(i);
            } else {
                //
                for (int j = 1; j <= i; j++) {
                    System.out.print(j + " ");
                }
                for (int j = i - 1; j >= 1; j--) {
                    System.out.print(j + " ");
                }
                System.out.println();
                // -----
                for (int j = 1; j <= space; j++) {
                    System.out.print(" ");
                }
                space--;
                for (int j = 1; j <= i; j++) {
                    System.out.print(j + " ");
                }
                for (int j = i; j >= 1; j--) {
                    System.out.print(j + " ");
                }
                System.out.println();

            }
        }
        // System.out.println("---"+num);
        int limit = num + (num - 1);
        space = 1;
        once = true;
        for (int i = num; i >= 1; i--) {
            for (int j = 1; j <= space; j++) {
                System.out.print(" ");
            }
            // if (i - 1 == 1) {
            // space++;
            // }
            space++;
            if (i == 1) {
                System.out.println(i);
            } else {
                if (!once) {
                    for (int j = 1; j <= i; j++) {
                        System.out.print(j + " ");
                    }
                    for (int j = i; j >= 1; j--) {
                        System.out.print(j + " ");
                    }
                    System.out.println();

                    for (int j = 1; j <= space; j++) {
                        System.out.print(" ");
                    }
                    space++;
                    if (i - 1 == 1) {
                        space++;
                    }
                }
                if (once) {
                    once = false;
                }
                //
                for (int j = 1; j <= i; j++) {
                    System.out.print(j + " ");
                }
                for (int j = i - 1; j >= 1; j--) {
                    System.out.print(j + " ");
                }
                System.out.println();
                // -----

            }
        }
    }
}
