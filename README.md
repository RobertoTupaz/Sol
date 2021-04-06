//FirstArrayActivity
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int array[10], count, i, sum = 0, num = 1;

    printf("Size of Array : ");
    scanf("%d", &count);

    if (count < 5 || count > 10) {
        printf("\nInvalid Entry\n");
    } else {
        while(i < count) {
        printf("element %d : ", num);
        scanf("%d", &array[i]);
        sum = sum + array[i];
        i++;
        num++;
        }

        printf("Sum of all array elements : %d\n", sum);

    }

    return 0;
}

