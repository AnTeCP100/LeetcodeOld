#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        if(!head || !head->next) return NULL;
        ListNode *slow = head, *fast = head;
        
        while(fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            if(slow == fast) break;
        }
        
        if(!fast || !fast->next) return NULL;
        fast = head;
        while(slow != fast) {
            slow = slow->next;
            fast = fast->next;
        }
        
        return fast;
    }
};

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
}