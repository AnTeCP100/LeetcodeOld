#include <iostream>
#include <vector>
#include <string>

using namespace std;

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};


ListNode* swapPairs(ListNode* head) {
    //if head or next node is nullptr, return node
    if(head == nullptr || head->next == nullptr )
    {
        return head;
    }

    //if next node's next node is not nullptr, go to next swapPairs
    ListNode* secNode = head->next;
    if( secNode->next != nullptr)
    {
        secNode->next = swapPairs(secNode->next);
    }

    //transforms position
    head->next = secNode->next;
    secNode->next = head;

    return secNode;
}



int main()
{
    
}