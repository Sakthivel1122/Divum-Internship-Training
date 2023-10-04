public class Methods {
    static int cnt = 0;
    public static void myMeth(int num1, int num2) {
        System.out.println(cnt);
        System.out.println("From myMeth " + (num1 + num2));
        cnt++;
    }
    public static void main(String[] args) {
        myMeth(10,20);
        myMeth(20,30);
        myMeth(40,50);
    }
}
