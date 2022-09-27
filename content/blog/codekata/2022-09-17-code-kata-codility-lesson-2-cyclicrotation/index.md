---
title: "[Code Kata] 코딜리티 Codility Lesson 2 — CyclicRotation"
description: "N개의 원소를 가진 배열의 원소들을 한칸씩 뒤로 K번 이동시켰을 때 결과를 리턴하는 문제다. `N-1`번째 아이템 즉, 마지막 아이템의 경우 맨 앞으로 온다. 그래서 문제 이름이 CyclicRotation이다."
date: "2022-09-17T05:21:09.710Z"
category: "codekata"
published: false
---

### 문제

![image](./asset-1.png)
[https://app.codility.com/programmers/lessons/2-arrays/cyclic\_rotation/](https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/)

N개의 원소를 가진 배열의 원소들을 한칸씩 뒤로 K번 이동시켰을 때 결과를 리턴하는 문제다. `N-1`번째 아이템 즉, 마지막 아이템의 경우 맨 앞으로 온다. 그래서 문제 이름이 CyclicRotation이다.

---

### 제출 코드

[https://app.codility.com/demo/results/training62NM5N-Y64/](https://app.codility.com/demo/results/training62NM5N-Y64/)

마지막 아이템을 `pop()` 하고 맨 처음으로 넣는걸 K번 반복한다. 배열의 길이가 0인 경우도 있으니 잘 체크한다.

---

### 리뷰

처음에는 배열 길이가 0일때 상황을 체크하지 않았다. 엣지케이스를 잘 생각하자!
