# jq
> jq is a lightweight and flexible command-line JSON processor.

![jq](https://stedolan.github.io/jq/jq.png)


## 기능
* 간단히 커맨드라인에서 실행 가능한 JSON processor
* [curl](/http/curl.html)과 함께 사용
* [JSON](/ajax/json.html) 데이타를 가공할 수도 있음


## 설치

```sh
$ brew install jq
```
🤨 [brew](https://brew.sh/index_ko)가 설치되어 있지 않다면 [여기](https://brew.sh/index_ko)를 참고하여 먼저 설치하세요.

## 사용예
예제로 사용할 JSON의 URL은 [https://m.daum.net/api/app/home.json](https://m.daum.net/api/app/home.json)이다. 링크를 클릭해 보면 내용 확인이 가능하다.  

### 예쁘게(prettier) 보기
```sh
$ curl -s https://m.daum.net/api/app/home.json | jq .
```
```json
{
  "resultData": {
    "categoryTextColor": "#ffffff",
    "tabImageVersion": "2",
    "categoryList": [
      {
        "id": "news1",
        "name": "뉴스",
        "url": "http://m.daum.net/?view=channel_news1",
        "isFixed": false,
        "isNew": false,
        "iconUrl": "http://t1.daumcdn.net/daumtop_chanel/op/20160829022139457.png",
        "leftColor": "#59a0ef",
        "rightColor": "#59a0ef",
        "tabImage": "",
        "tabImagePosition": "",
        "badgeImage": "",
        "webBadgeImage": ""
      },
      {
        "id": "news2",
        "name": "랭킹",
        "url": "http://m.daum.net/?view=channel_news2",
        "isFixed": false,
        "isNew": false,
        "iconUrl": "http://t1.daumcdn.net/daumtop_chanel/op/20160829022126745.png",
        "leftColor": "#59a0ef",
        "rightColor": "#59a0ef",
        "tabImage": "",
        "tabImagePosition": "",
        "badgeImage": "",
        "webBadgeImage": ""
      }
    ],
    "deliveryCount": 0,
    "alarmCount": 0,
    "logoDeco": {
      "url": "http://m.daum.net/",
      "thumbnailUrl": "",
      "alt": "일반로고",
      "width": "60",
      "height": "38"
    }
  },
  "status": "OK",
  "exception": null
}
```

`curl -s https://m.daum.net/api/app/home.json | jq . > home-beautified.json`을 통해 파일로도 저장이 가능할 것이다.

### 필요한 값만 추출하기

길고 긴 `json` 내용중 특정 부분만 디버깅 하고자 할때, 아주 유용하다. `resultData.categoryList[1]` 값을 추출하려면 아래와 같이 하면 된다.
```sh
$ curl -s https://m.daum.net/api/app/home.json | jq .resultData.categoryList[1]
```
```json
{
  "id": "news2",
  "name": "랭킹",
  "url": "http://m.daum.net/?view=channel_news2",
  "isFixed": false,
  "isNew": false,
  "iconUrl": "http://t1.daumcdn.net/daumtop_chanel/op/20160829022126745.png",
  "leftColor": "#59a0ef",
  "rightColor": "#59a0ef",
  "tabImage": "",
  "tabImagePosition": "",
  "badgeImage": "",
  "webBadgeImage": ""
}
```

배열의 내용중 `name` 값들만 보고 싶다면?
```sh
$ curl -s https://m.daum.net/api/app/home.json | jq .resultData.categoryList[].name
```
```json
"뉴스"
"랭킹"
```

원하는 형식으로 json을 만들어 낼 수도 있다.
```sh
$ curl -s https://m.daum.net/api/app/home.json | \
    jq '. | [{url: .resultData.categoryList[].url, name: .resultData.categoryList[].name }]'
```
```json
[
  {
    "url": "http://m.daum.net/?view=channel_news1",
    "name": "뉴스"
  },
  {
    "url": "http://m.daum.net/?view=channel_news1",
    "name": "랭킹"
  }
]
```






::: tip Link
- [jq](https://stedolan.github.io/jq/)
- [github](https://github.com/stedolan/jq/)
- [tutorial](https://stedolan.github.io/jq/tutorial/)
- [manual](https://stedolan.github.io/jq/manual/)
- [try online 😎강추](https://jqplay.org/)
:::