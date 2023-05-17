# 웹 크롤링

> 웹 페이지에서 필요한 데이터를 추출

### playwright 사용

```js
import playwright from 'playwright';

(async () => {
  const browser = await playwright.chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://www.daum.net');

  // 모든 .link_txt 요소를 가져옵니다.
  const linkTexts = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.link_txt')).map(
      (link) => link.innerText
    );
  });

  // 링크 텍스트를 콘솔에 인쇄합니다.
  for (const linkText of linkTexts) {
    console.log(linkText);
  }

  await browser.close();
})();
```
