#include <stdio.h>
int main(){
	
	//array program
	
	int marks[5],i,sum=0;
	for(i=0; i<=5; i++){
		printf("\n enter value for index %d,i : ");
		scanf("%d,&marks[i]");
}
	for(i=0; i<=5; i++){
		printf("\n value at index %d is %d",i,marks[i]);
		sum += marks[i];
}
return sum;
}
		
	

	
