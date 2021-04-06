//FirstArrayActivity
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int array[10], count, i;
    int sum = 0, num = 1;

    printf("Size of Array : ");
    scanf("%d", &count); //Array Size Counter

    //Sets Array size limit (5 - 10)
    if (count < 5 || count > 10) {
        printf("\nInvalid Entry\n");
    } else {
        //Array Loop, scans how many count.
        while(i < count) {
        printf("element %d : ", num);
        scanf("%d", &array[i]);
        sum = sum + array[i]; //Adds all element entered
        i++;
        num++;
        }

        //Print Total
        printf("Sum of all array elements : %d\n", sum);

    }

    return 0;
}
