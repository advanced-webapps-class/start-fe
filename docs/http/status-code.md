# 상태코드


### 성공(Success)

| 상태코드 | 내용 | 
|---|---|
| 200 | 정상 |
| 201 | 자원(Resource) 생성 요청 |

### 리다이렉션

| 상태코드 | 내용 | 
|---|---|
| 301 | 응답 코드는 요청한 리소스의 URI가 변경되었음을 의미 |

### 클라이언트 에러

| 상태코드 | 내용 | 
|---|---|
| 400 | 클라이언트 요청이 부적절할 경우 응답 코드 |
| 401 | 클라이언트가 권한이 없는 자원(Resource)를 요청하였을 때 응답 코드 |
| 403 | 보호되는 자원(Resource)를 요청하였을 때 응답 코드 |

### 서버에러 

| 상태코드 | 내용 | 
|---|---|
| 500 | 서버에 뭔가 문제가 있을때 사용하는 응답 코드 |

:::tip Link
[MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)
:::