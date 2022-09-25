---
title: "안드로이드 스튜디오 무선 디버깅(WiFi) 하기"
description: "안드로이드 스튜디오에서 기기와 케이블을 연결하지 않고 디버깅을 할 수 있는 방법이 있습니다. adb connect를 사용하는 방법입니다."
date: "2020-06-01T01:37:33.972Z"
categories: []
published: true
canonical_link: https://medium.com/@sunriv/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C-%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4-%EB%AC%B4%EC%84%A0-%EB%94%94%EB%B2%84%EA%B9%85-wifi-%ED%95%98%EA%B8%B0-7d827ca24c12
redirect_from:
  - /안드로이드-스튜디오-무선-디버깅-wifi-하기-7d827ca24c12
---

안드로이드 스튜디오에서 기기와 케이블을 연결하지 않고 디버깅을 할 수 있는 방법이 있습니다. **adb connect**를 사용하는 방법입니다.

---

![a][./assets-1.png]

먼저, 무선 디버깅을 위해 최초 한번은 기기를 usb에 연결해야 합니다.

```shell
adb tcpip 5555
```

tcp 프로토콜로 기기에 접속합니다. `restarting in TCP mode port: 5555` 메시지가 나오면 성공한 것 입니다.

이제 기기와 usb 연결을 해제해도 됩니다.

---

그 후 기기의 네트워크 설정에 들어가서 공유기로부터 할당된 내부 아이피 주소를 확인합니다. G6의 경우 설정->일반->휴대폰정보->네트워크->IP 주소에서 확인할 수 있네요.

```shell
adb connect 192.168.0.115
```

`connected to 192.168.0.115:5555` 메시지가 나타나면 무선 디버깅 세팅이 완료되었습니다.
