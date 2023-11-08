#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

int N, len, damage, ammo;
ll arr[3000001];
ll acc[3000001];

// https://int-p.tistory.com/26 copied
int main(void) {
	ios::sync_with_stdio(false);
	cin.tie(0);
	cin >> N;
	cin >> len >> damage;
	cin >> ammo;
	for (int i = 1; i <= N; i++) {
        cin >> arr[i];
    }

	for (int i = 1; i <= N; i++) {
        // 현재 누적데미지값 계산, 이전데미지 값 - 총기범위의 accumulator 값
		ll now = acc[i - 1] - acc[max(0, i - len)];

        // 현재 zombie가 누적데미지 + 데미지로 죽는지체크
		if (arr[i] <= now + damage) {
			acc[i] = acc[i - 1] + damage;
			continue;
		} else {
			if (ammo) {
                // ammo 투척시 기관총 발사 x, 누적데미지 x
				acc[i] = acc[i - 1];
				ammo--;
			} else {
				cout << "NO" << endl;
				return 0;
			}
		}
	}
	cout << "YES" << endl;
	return 0;
}
