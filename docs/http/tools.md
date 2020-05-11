# 테스트 도구들

## Postman

> The Collaboration Platform for API Development

https://www.postman.com/

## RequestBin

> A modern request bin to inspect HTTP events

https://requestbin.com/

## .http

- [Rest Client 확장설치](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

```
# test.http 파일로 저장
GET https://daum.net
```

## cURL

> 다양한 통신 프로토콜을 이용하여 데이터를 전송하기 위한 [CLI](https://ko.wikipedia.org/wiki/%EB%AA%85%EB%A0%B9_%EC%A4%84_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4)툴

```bash
$ curl https://1boon.kakao.com

$ curl -v https://1boon.kakao.com ## 자세한 옵션을 출력

$ curl https://1boon.kakao.com -o 1boon.html
```
