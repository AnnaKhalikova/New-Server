#include <iostream>
#include <string>
#include <stdio.h>
#include <stdlib.h>
using namespace std;
void set_content_type(string content_type) {
  cout << "Content-type: " << content_type << "\r\n\r\n";
}
void set_page_title(string title) {
  cout << "<title>" << title << "</title>\n";
}
void h1_text(string text) {
  cout << text << "\n";
}
int main() {
  string name;
  set_content_type("text/html");
  cout << "<!doctype html>\n";
  cout << "<html lang=\"en\">\n";
  cout << "<head>\n";
  set_page_title("Test");
  cout << "</head>\n";
  cout << "<body>\n";
  cout << "<p>";
  cout << "Name was not provided.";
  cout << "</p>\n";
  cout << "</body>\n";
  cout << "</html>";
  return 0;
}
