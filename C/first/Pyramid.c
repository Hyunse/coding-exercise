#include <stdio.h>
#define N 20

int main(void)
{
	int i, j;
	for(i = 0; i < N; i++)
	{
		for(j = N - i - 1; j > 0; j--)
		{
			printf(" ");
			
		}
		
		for(j = 0; j < 2*i - 1; j++)
		{
			printf("*");
		}
		
		printf("\n");
	}
	return 0;
}
