# http 메세지


1. 시작줄: 요청의 종류/응답의 결과 
1. 헤더: 이름과 값으로 구분된 추가정보, 헤더는 빈줄로 끝남
1. 본문: 콘텐츠 데이터

### 요청헤더(Request)

```http
GET / HTTP/1.1
Host: www.daum.net
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36
DNT: 1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
Accept-Encoding: gzip, deflate, br
Accept-Language: ko,en-US;q=0.9,en;q=0.8,de;q=0.7,fr;q=0.6,zh-CN;q=0.5,zh;q=0.4,th;q=0.3,la;q=0.2,da;q=0.1
```

### 응답헤더(Reponse)

```http
HTTP/1.1 200 OK
Date: Fri, 07 Dec 2018 04:58:20 GMT
X-UA-Compatible: IE=10
Expires: Sat, 01, Jan 1970 22:00:00 GMT
Pragma: no-cache
Cache-Control: no-cache, no-store, must-revalidate
P3P: CP="ALL DSP COR MON LAW IVDi HIS IVAi DELi SAMi OUR LEG PHY UNI ONL DEM STA INT NAV PUR FIN OTC GOV"
Content-Type: text/html;charset=UTF-8
Content-Language: ko
Vary: Accept-Encoding
Content-Encoding: gzip
X-UA-Device-Type: pc
Content-Length: 48546
Connection: close
```

:::tip Link
[MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Messages)
:::