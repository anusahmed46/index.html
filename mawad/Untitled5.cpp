#include <stdio.h>
int main(){
	
	int row , col , alp = 65;
	
	for(row=1 ; row<=26 ; row++){
		for(col=1 ; col<=row ; col++){
			printf("%c",alp);
		}
		alp++;
		printf("\n");
	}
	
	
	return 0;
}
