// #include <stdio.h>

// int main() 
// {
//    printf("Hello World!\n");

//    return 0;
// }

/* Write a program that computes and prints the square root of 1289blah blah blah */

#include <math.h>
#include <stdio.h>

// double intsqrt(int x) {
//     return sqrt(x);
// }

// int main() {
//     printf("intsqrt returned: %lf\n", intsqrt(100));

//     return 0;
// }

int main() {
    int a;
    char b[100];

    printf("Enter a value: ");
    scanf("%d", &a); // The & is important for non-arrays

    printf("You entered:\n%d\n", a);

    printf("Enter a string: ");
    scanf("%s", b);

    printf("You entered:\n%s\n", b);
}