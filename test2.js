m = 1000000;
K = 1000000;

function sum(s, k) {
  return ((2 * m - 4 * s + 2 * k - (k - s - 1)) * (k - s)) / 2;
}

let ans = 0;
for (let k = 2; k <= K; k++) {
  for (let s = 1; s * s <= k; s++) {
    if (k % s == 0) {
      ans += sum(k - s, k);
      if (s != 1 && s * s != k) {
        ans += sum(k - k / s, k);
      }
    }
  }
}
console.log(ans);
// for k in range(2, K):
//     for s in range (1, round(math.sqrt(k)+2)):
//         if (k % s == 0):
//                 ans += sum(k - s, k)
//                 if (s != 1 and s * s != k):
//                     ans += sum(k - k/s, k)

// print(ans)
