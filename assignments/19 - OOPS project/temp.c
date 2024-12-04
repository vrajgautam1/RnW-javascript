#include <stdio.h>

int main()
{
    for(int i = 1; i <= 5; i++) {
        if(i<=3){
            for(int j = 1; j <= i ; j++) {
                printf("* ");
        }
        }
        else{
            for(int k = 1; k<=6-i; k++){
                printf("* ");
            }
        }
        printf("\n");
    }
}
