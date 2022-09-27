---
title: "[Code Kata] Codility Lesson3 — TapeEquilibrium"
description: "N길이를 가지는 배열의 P 인덱스를 기준으로 A[0],…, A[P-1]의 합과 A[P],...,A[N-1] 의 합의 차이를 모두 구했을 때, 가장 작은 차이 값이 얼마인지를 구하는 문제"
date: "2022-09-23T12:11:29.620Z"
category: "codekata"
published: false
---

![image](./asset-1.png)
[https://app.codility.com/programmers/lessons/3-time\_complexity/tape\_equilibrium/](https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/)

`N`길이를 가지는 배열의 `P` 인덱스(0 < P < N)를 기준으로 `A[0], … , A[P-1]`의 합과 `A[P], ... ,A[N-1]` 의 합의 차이를 모두 구했을 때, 가장 작은 차이 값이 얼마인지를 구하는 문제

### 풀이

[https://app.codility.com/demo/results/trainingKHHKV5-N6Z/](https://app.codility.com/demo/results/trainingKHHKV5-N6Z/)

루프 안에서 매번 배열을 자르고 합하는 과정은 퍼포먼스가 굉장히 나빠지므로 직전의 결과값을 활용하여 연산하는 방식을 사용하였다.

### 오답

#### 효율성 테스트 실패

```python
def solution(A):
    differences = []

    for P in range(1, len(A)):
        differences.append(abs(sum(A[:P]) - sum(A[P:])))
    
    differences = sorted(differences)

    return differences[0]
```

[https://app.codility.com/demo/results/training2GGK3Q-ZPE/](https://app.codility.com/demo/results/training2GGK3Q-ZPE/)

`A[a:b]` 는 `O(b-a)` 시간복잡도를 가진다. 배열의 길이가 최대 100,000 이므로 반복문 안에서 배열을 슬라이싱하면 너무 오래걸린다.

### 리뷰

효율성을 항상 염두에 두자..
