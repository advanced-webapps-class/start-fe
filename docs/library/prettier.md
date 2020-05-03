# Prettie

- 코드 포맷터
- https://prettier.io

## 글로벌 설치후 테스트

```
$ npm install --global prettier
$ prettier --write // 현재 디렉토리의 파일들 Prettier 적용
```

## VS Code 확장

- [확장 설치](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- `VS Code` 환경 설정 > `Format On Save` 체크

```json
//setting.json
"editor.formatOnSave": true
```

## [옵션](https://prettier.io/docs/en/options.html)

```json
// .prettierrc
{
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "trailingComma": "all",
  "printWidth": 80
}
```
