#include <iostream>
#include <vector>
#include <string>

using namespace std;

class FooBar {
private:
    int n;
    mutex  lock_bar,lock_foo;

public:
    FooBar(int n) {
        this->n = n;

    }

    void foo(function<void()> printFoo) {
        
        for (int i = 0; i < n; i++) {
            
            lock_bar.lock();
        	// printFoo() outputs "foo". Do not change or remove this line.
        	printFoo();
            lock_foo.unlock();

        }
    }

    void bar(function<void()> printBar) {
        
        for (int i = 0; i < n; i++) {
            
            lock_foo.lock();
        	// printBar() outputs "bar". Do not change or remove this line.
        	printBar();
            lock_bar.unlock();
        }
    }
};

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
}