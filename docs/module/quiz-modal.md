# 퀴즈-Modal 모듈 만들기

## 모달 html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .modal .body {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .modal .body .close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
      }
      .modal .body .content {
        width: 300px;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    </style>
  </head>
  <body>
    <div class="modal">
      <div class="body">
        <div class="close">X</div>
        <div class="content">안녕하세요</div>
      </div>
    </div>
  </body>
</html>
```

## 모듈 사용법

```html
<button id="btn">모달 열기</button>
<script src="./app.js"></script>
```

```js
// app.js
// modal.js 구현
import { openModal } from './modal.js';

$btn.addEventListener('click', () => {
  openModal({
    text: '모달입니다.',
  });
});
```
