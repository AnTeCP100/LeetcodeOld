#include <iostream>
#include <vector>
#include <string>

using namespace std;

vector<int> solution(vector<int> &A, int K) {
    int len = A.size();
    
    int transK = K%len;
    vector<int> copy;

    for(int pos = 0;pos<len;pos++)
    {
        copy.push_back(A[pos]); 
    }

    for(int pos = 0;pos<len;pos++)
    {
        int newPos = (pos + transK)>(len-1)?(pos + transK)-(len-1):pos + transK;
        A[newPos] = copy[pos];
    }

    for(int pos = 0;pos<len;pos++)
    {
        
        cout << A[pos] << " "; 
    }

}

int main()
{
    
    ios::sync_with_stdio(false);
    cin.tie(0);
    vector<int> vect1{3, 8, 9, 7, 6}; 
    solution(vect1,3);
}