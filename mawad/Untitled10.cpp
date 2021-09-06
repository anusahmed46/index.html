#include <stdio.h>
int main(){
	
	int i;
	for(i=1;i<=20;i++){
		if(i==18){
			break;
		}
		else{
			printf("%d\n",i);
		}
	}
	return 0;
}
