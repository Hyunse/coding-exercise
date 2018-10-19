
#include <stdio.h>

int getStringLength(char s[]) {
	int i = 0;

	while (s[i] != '\0') {
		i++;
	}
	
	return i;
}

void copyString(char s1[], char s2[]) {
	int i;

	for (i = 0; i < getStringLength(s1); i++) {
		s2[i] = s1[i];
	}

	s2[getStringLength(s1)] = '\0';

	printf("Copy String : %s\n", s2);

}

void appendString(char s1[], char s2[]) {
	
	int length = getStringLength(s1);
	int i = 0;
	
	while(s2[i] != '\0') {
		s1[length] = s2[i];
		length++;
		i++;
	}
	s1[length] = '\0';

}

int main (void) {

	char firstArray[100] = "This";
	char secondArray[5];
	// Length
	printf("Length is %i\n", getStringLength(firstArray));
	
	// Copy
	copyString(firstArray, secondArray);

	printf("%s\n", secondArray);

	// Append
	appendString(firstArray, " is an apple");

	printf("%s", firstArray);

	return 0;
}
