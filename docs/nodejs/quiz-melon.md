# 퀴즈 - 멜론차트 크롤링

- [멜론차트](https://www.melon.com/chart/index.htm)에서 1위부터 100위까지의 노래 제목, 가수, 앨범을 가져와서 `melon.json` 파일로 저장하는 코드를 작성

1. `npm init` 명령어를 사용하여 프로젝트를 생성
1. `npm install playwright` 명령어를 사용하여 playwright 모듈을 설치
1. `npm install fs` 명령어를 사용하여 fs 모듈을 설치
1. playwright 모듈을 사용하여 웹 페이지를 가져옴
1. DOM API를 사용하여 데이터를 추출
1. JSON.stringify() 메소드를 사용하여 JSON 문자열로 변환
1. fs 모듈을 사용하여 파일로 저장
