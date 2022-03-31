/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
    Node* copyRandomList(Node* head) {
        map<Node*, Node*> map;
        
        Node *tmp = head;
        while(tmp != NULL) {
            map[tmp] = new Node(tmp->val);
            tmp = tmp->next;
        }
        
        Node *newHead = map[head];
        Node *current = newHead;
        tmp = head;
        while(tmp != NULL) {
            if(tmp->next != NULL) {
                current->next = map[tmp->next];
            }
            if(tmp->random != NULL) {
                current->random = map[tmp->random];
            }
            tmp = tmp->next;
            current = current->next;
        }
        
        return newHead;
    }
};