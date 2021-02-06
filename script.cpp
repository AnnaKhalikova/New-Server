#include <iostream>
#include <string>
#include <stdio.h>
#include <stdlib.h>
#include <cgicc/CgiDefs.h>
#include <cgicc/Cgicc.h>
#include <cgicc/HTTPHTMLHeader.h>
#include <cgicc/HTMLClasses.h>
using namespace std;
using namespace cgicc;

char* getCharArrayFromString(string text);
void setNormalizeText(char* text);
bool isCapitalLetter(char letter);
void splitString(char* string, int startWordPosition = 0, int count = 1);
bool isMatchString(char* str1, char* str2);
void getResult(char* fragment, char* text, int matchCount, double& unique);
void strCopy(char s1[], char s2[]);
int strLength(char string[]);
double getUniquePercent(double match, double iterations);

string getDB();

int main()
{
    Cgicc form;
    string name;
    double unique = 0.0;
    
    cout << "Content-type:text/html\r\n\r\n";
    cout << "<html>\n";
    cout << "<head>\n";
    cout << "<title>Ggi Server</title>\n";
    cout << "</head>\n";
    cout << "<body>\n";
    cout << "<p>";
    
    name = form("name");
    getResult(getCharArrayFromString(name), getCharArrayFromString(getDB()), 3, unique);
    if (!name.empty()) {
    	cout << unique << "\n";
    } else {
    	cout << "Text is not provided!\n";
    }	
    cout << "</p>\n";
    cout << "</body>\n";
    cout << "</html>\n";

    return 0;
}

char* getCharArrayFromString(string text){
	char* textArray = new char[text.length()];
	for(int i = 0; i < text.length(); i++){
		textArray[i] = text[i];
	}
	return getCharArrayFromString;
}

string getDB(){
	std::ifstream in("db.txt");

    string dbText = "", s1;
    while (getline(in, s1))
    	dbText += s1;
  
    in.close();
    
    return dbText;
}

void setNormalizeText(char* text) {
	int count = 0;
	for (int i = 0; text[i] != '\0'; i++) {
		if ((text[i] >= 65 and text[i] <= 90) or (text[i] >= 97 and text[i] <= 122)) {
			if (isCapitalLetter(text[i]))
					text[i] += 32;
		}
		else
			text[i] = ' ';
	}
}

bool isCapitalLetter(char letter) {
	if (letter >= 65 and letter <= 90)
		return true;
	return false;
}

void getResult(char* fragment, char* originalText, int matchCount, double& unique) {
	int i = 0, j = 0;
	double result = 0, iterationCount = 0;

	setNormalizeText(originalText);	
	setNormalizeText(fragment);

	char copyFragment[256];
	char copyFragmentIteration[256];
	char copyOriginalText[256];
	char copyOriginalTextIteration[256];	

	strCopy(copyFragment, fragment);	
	strCopy(copyFragmentIteration, fragment);	
	strCopy(copyOriginalText, originalText);
	strCopy(copyOriginalTextIteration, originalText);	
	splitString(copyOriginalTextIteration);
	
	while (strLength(copyOriginalTextIteration) > 0) {
		iterationCount++;
		splitString(copyOriginalText, i, matchCount);
		strCopy(copyFragmentIteration, fragment);
		splitString(copyFragmentIteration);		
		while (strLength(copyFragmentIteration) > 0) {			
			splitString(copyFragment, j, matchCount);
			if (isMatchString(copyOriginalText, copyFragment)) {
				iterationCount++;
				result++;
			}
			strCopy(copyFragment, fragment);
			strCopy(copyFragmentIteration, fragment);
			j++;
			splitString(copyFragmentIteration, j);
		}
		strCopy(copyOriginalText, originalText);
		strCopy(copyOriginalTextIteration, originalText);
		i++;
		j = 0;
		splitString(copyOriginalTextIteration, i);
	}
	unique = getUniquePercent(result, iterationCount);	
}

void splitString(char* string, int startWordPosition, int count) {
	char buf[256];
	int length = 0;
	int words = 0;
	bool flag = false;
	int i = 0, j = 0;

	count += startWordPosition;	
	while (string[i] != '\0') {
		if (startWordPosition >= count)
			break;
		while (string[i] == ' ') {
			if (!flag)
				words++;
			flag = true;
			i++;
		}
		flag = false;
		if (count == words)
			break;
		if (startWordPosition <= words) {
			buf[j] = string[i];			
			length++;
			j++;
		}
		i++;
	}

	for (i = 0; string[i] != '\0'; i++)	{
		if (i < length)
		{
			string[i] = buf[i];
			
		}
		else
			string[i] = '\0';
	}
}

bool isMatchString(char* str1, char* str2) {
	if (strLength(str1) != strLength(str2))
		return false;
		
	for (int i = 0; str1[i] != '\0'; i++) {
		if (str1[i] != str2[i])
			return false;
	}
	return true;
}

void strCopy(char s1[], char s2[]) {
	int length = strLength(s2);

	for (int i = 0; i <= length; i++) {
		if (i == length)
			s1[i] = '\0';
		s1[i] = s2[i];
	}
}

int strLength(char string[]) {
	int counter = 0;

	while (string[counter] != '\0')
		counter++;

	return counter;
}

double getUniquePercent(double match, double iterations) {
	double result;

	if (!match)
		return 100;

	result = (iterations - match) / iterations * 100;
	return result;
}
