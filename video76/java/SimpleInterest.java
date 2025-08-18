public class SimpleInterest {
    public static void main(String[] args) {
        // Declare variables
        double p = 10000; // Principal amount
        double r = 5;     // Rate of interest
        double t = 2;     // Time in years

        // Calculate Simple Interest
        double si = (p * r * t) / 100;

        // Print the result
        System.out.println("Simple Interest is: " + si);
    }
}
