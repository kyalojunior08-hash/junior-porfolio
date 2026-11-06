#include <iostream>
#include <string>
using namespace std;
int main() {
    string name;
    cout<< "Enter your name: ";
    getline(cin, name);
    cout << "Welcome," << name << " developer mode activated,\n!" ;
    return 0;
}

