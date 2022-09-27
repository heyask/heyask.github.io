---
title: "[Code Kata] 코딜리티 Codility Lesson 1 — Binary Gap"
description: "주어진 양의 정수 N을 이진수로 표현했을 때, 1과 1 사이 0이 존재하는 패턴 중 가장 긴 0을 가진 패턴에서 0의 갯수를 찾는 문제다."
date: "2022-09-17T05:14:29.936Z"
category: "codekata"
published: false
---

### 문제

![image](./asset-1.png)
[https://app.codility.com/programmers/lessons/1-iterations/binary\_gap/](https://app.codility.com/programmers/lessons/1-iterations/binary_gap/)

주어진 양의 정수 N을 이진수로 표현했을 때, 1과 1 사이 0이 존재하는 패턴 중 가장 긴 0을 가진 패턴에서 0의 갯수를 찾는 문제다.

---

### 제출 코드

[https://app.codility.com/demo/results/trainingWQSUM3-5S6/](https://app.codility.com/demo/results/trainingWQSUM3-5S6/)

정수 N을 2로 나누었을때의 나머지를 `binaryStr` 에 이어붙이면서 문자열로 된 이진수를 구했다. 그리고 정규식을 통해 매칭되는 패턴을 모두 찾아서 배열에 넣었고, 가장 긴 길이를 가진 아이템을 `max()` 함수로 찾았다.

---

### 리뷰

자바스크립트에서는 `N.toString(2)` 와 같이 간단하게 십진수를 이진수로 변환할 수 있다. 하지만 우선순위큐와 같은 자료구조를 제공하지 않는 경우도 있어 직접 구현해야하는 단점도 있다. 언어마다 장단점이 있는듯하다.

정규식의 경우 전방탐색만을 사용했는데 결과에는 영향이 없긴하지만 후방탐색도 같이 사용하면 코드가 더 깔끔했을 것 같다.
