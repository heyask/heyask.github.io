---
title: "[Code Kata] Codility Lesson3 — PermMissingElem"
description: "1부터 N+1까지의 정수를 가지는 배열이 있는데 중간에 빠져있는 정수를 찾는 문제"
date: "2022-09-23T11:43:08.235Z"
category: "codekata"
published: true
---

![image](./asset-1.png)
[https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/](https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/)

1부터 N+1까지의 정수를 가지는 배열이 있는데 중간에 빠져있는 정수를 찾는 문제

### 풀이

```python
def solution(A):
    A = sorted(A)

    if len(A) == 0 or A[0] != 1:
        return 1
    if len(A) == 2 and A[1] != 2:
        return 2

    for i in range(1, len(A)):
        if A[i-1] + 1 != A[i]:
            return A[i-1] + 1

    return A[len(A) - 1] + 1
```
[https://app.codility.com/demo/results/trainingDXP2NW-CNP/](https://app.codility.com/demo/results/trainingDXP2NW-CNP/)

오름차순 정렬 후 for문을 통해 순차적으로 체크했다. 배열 길이가 100,000 이었고 O(N)의 시간복잡도를 가졌기 때문에 효율성 테스트도 통과할것이라고 생각했다.

### 리뷰

무난한 문제였다
