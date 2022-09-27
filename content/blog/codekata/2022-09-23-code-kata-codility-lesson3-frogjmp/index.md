---
title: "[Code Kata] Codility Lesson3 — FrogJmp"
description: "X위치에 개구리가 있고 D거리만큼 점프할 수 있다. Y위치 이상까지 도달하는데 걸리는 횟수를 계산하는 문제"
date: "2022-09-23T11:33:49.398Z"
category: "codekata"
published: false
---

![image](./asset-1.png)
[https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/](https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/)

`X`위치에 개구리가 있고 `D`거리만큼 점프할 수 있다. `Y`위치 이상까지 도달하는데 걸리는 횟수를 계산하는 문제

### 풀이

[https://app.codility.com/demo/results/trainingZUDP5R-TCY/](https://app.codility.com/demo/results/trainingZUDP5R-TCY/)

주어진 값들의 범위가 `[1…1,000,000,000]`이기 때문에 for문을 돌리면 효율성 테스트에 실패할게 뻔했다. 따라서 계산을 통해 구했다.

#### 오답

```
def solution(X, Y, D):
    cnt = 0
    while X <= Y:
        X += D
        cnt += 1
    return cnt
```

[https://app.codility.com/demo/results/training3G9FTT-PW8/](https://app.codility.com/demo/results/training3G9FTT-PW8/)

역시 효율성 테스트에 실패한다.

### 리뷰

무난하게 풀 수 있었다..
