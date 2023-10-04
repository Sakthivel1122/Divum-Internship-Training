public class Recursion {
    static int sum(int num) {
        if(num == 0){
            return num;
        }
        return num + sum(num - 1);
    }
    static int sumStartEnd(int start,int end) {
        if(end == start) {
            return end;
        }
        return end + sumStartEnd(start, end - 1);
    }
    public static void main(String[] args) {
        // System.out.println(sum(3));
        System.out.println(sumStartEnd(5, 10));
    }
}
