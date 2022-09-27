---
title: "[Code Kata] Codility Lesson4 — FrogRiverOne"
description: "개구리가 강을 건너려고 한다. 잎이 하나 떨어지고 있는데 배열 A[K]는 이 잎이 K초에 어디(정수)에 위치하는지를 나타낸다. X는 정수\b\b이고, 잎이 1부터 X 까지 모든 위치에 한번 이상 위치했을 때부터 건널 수 있다. 그 때가 몇 초인지를 찾는…"
date: "2022-09-24T10:26:59.965Z"
category: "codekata"
published: false
---

![image](./asset-1.png)
[https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/](https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/)

개구리가 강을 건너려고 한다. 잎이 하나 떨어지고 있는데 배열 `A[K]`는 이 잎이 `K`초에 어디(정수)에 위치하는지를 나타낸다. `X`는 정수이고, 잎이 `1`부터 `X` 까지 모든 위치에 한번 이상 위치했을 때부터 건널 수 있다. 그 때가 몇 초인지를 찾는 문제다

### 풀이

[https://app.codility.com/demo/results/training2NMCVQ-CKS/](https://app.codility.com/demo/results/training2NMCVQ-CKS/)

먼저 중복을 제외하기 위해 Set을 하나 선언해주고, 배열을 순회하면서 Set에 넣는다. Set의 길이가 `X`와 같아지면 모든 위치에서 한번 이상 위치했다는 뜻이므로 그때의 배열 인덱스를 리턴해주면 된다.

### 오답

배열을 끝까지 돌았음에도 잎이 모든 위치에 보여지지 않았을때 체크 안함

```python
def solution(X, A):
    appeared = set()
    
    for i in range(len(A)):
        appeared.add(A[i])
        if(len(appeared) == X):
            return i

    return -1
```

[**Test results - Codility**  
_A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river…_app.codility.com](https://app.codility.com/demo/results/trainingB2V5VP-9HN/ "https://app.codility.com/demo/results/trainingB2V5VP-9HN/")[](https://app.codility.com/demo/results/trainingB2V5VP-9HN/)
