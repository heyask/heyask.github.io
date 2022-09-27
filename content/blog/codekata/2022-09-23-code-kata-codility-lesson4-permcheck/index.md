---
title: "[Code Kata] Codility Lesson4 — PermCheck"
description: "주어진 배열 A가 순열인지 아닌지 판단하는 문제이다."
date: "2022-09-23T14:21:15.128Z"
category: "codekata"
published: false
---

![image](./asset-1.png)
[https://app.codility.com/programmers/lessons/4-counting\_elements/perm\_check/](https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/)

주어진 배열 A가 순열인지 아닌지 판단하는 문제이다.

### 풀이

```python
def solution(A):
    A = sorted(A)
    
    if A[0] != 1:
        return 0

    for i in range(1, len(A)):
        if A[i - 1] + 1 != A[i]:
            return 0
    
    return 1
```
[https://app.codility.com/demo/results/trainingS7RSU4-RFY/](https://app.codility.com/demo/results/trainingS7RSU4-RFY/)

오름차순 정렬 후 A\[i-1\]+1이 A\[i\]와 동일한지 비교한다.

### 리뷰

예외케이스 꼼꼼히 체크
