# 요청 메소드


| 메소드 | 내용  | RESTful |
|------|---|---|
| GET | URL(URI) 형식으로 웹서버측 리소스(데이터)를 요청 | Read | 
| POST | 내용 전송 (파일 전송 가능) | Create |
| PUT | 내용 갱신 위주 (파일 전송 가능) | Update | 
| DELETE | 파일을 삭제 | Delete |
| HEAD | 메세지 헤더(문서 정보) 취득 | |
| OPTIONS | 웹서버측 제공 메소드에 대한 질의 | |
| TRACE | 요청 리소스가 수신되는 경로를 보여줌 | |
| CONNECT | 프락시 서버와 같은 중간 서버 경유 | |

보안상의 이유등으로 `GET,POST,PUT,DELETE` 주로 사용