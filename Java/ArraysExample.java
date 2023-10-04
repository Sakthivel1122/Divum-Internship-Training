public class ArraysExample {
    public static void main(String[] args) {
        int arr[] = { 10, 20, 30, 40, 50 };
        System.out.println(arr);
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }

        int twoDArr[][] = {
                { 1, 2, 3 },
                { 4, 5 }
        };
        twoDArr[0][0] = 10;
        for (int i = 0; i < twoDArr.length; i++) {
            for (int j = 0; j < twoDArr[i].length; j++) {
                System.out.print(twoDArr[i][j] + " ");
            }
            System.out.println();
        }
    }
}
