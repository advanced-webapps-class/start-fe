# CORS
> Cross-Origin Resource Sharing

웹 브라우저가 사용하는 정보를 읽을 수 있도록 허가된 출처 집합를 서버에게 알려주도록 허용하는 HTTP 헤더를 추가함으로써 동작

## 예제 http response 헤더
```http
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS
Access-Control-Max-Age: 3600
Access-Control-Allow-Headers: Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization
```

::: tip Link
 - [HTTP 접근 제어-MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Access_control_CORS)
:::