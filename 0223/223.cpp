#include <iostream>
#include <vector>
#include <string>

using namespace std;

int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
        int areaA = abs(ax2-ax1) * abs(ay2-ay1);
        int areaB = abs(bx2-bx1) * abs(by2-by1);
        int lx = max(ax1, bx1);
        int ly = max(ay1, by1);
        int rx = min(ax2, bx2);
        int ry = min(ay2, by2);
        int ans = areaA+areaB;
        if(rx> lx && ry > ly)
            ans -= (rx-lx)*(ry-ly);
        return ans;
    }

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
}