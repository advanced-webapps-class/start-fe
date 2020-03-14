# Gulp 
> Automate and enhance your workflow  

[gulpjs.com](https://gulpjs.com)

### `package.json` 생성

```
$ npm init 
```

### gulp를 devDependencies 추가 

```
$ npm install --save-dev gulp
```

### `gulpfile` 만들기

```js
//gulpfile.js

var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
```


### 플러그인 설치
https://github.com/terinjokes/gulp-uglify

```
$ npm install --save-dev gulp-uglify
```

### `gulpfile`에 플러그인 적용

```js
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
    var src = ['src/*.js'];
    
    return gulp.src(src)
            .pipe(uglify())
            .pipe(gulp.dest('all.js'))
});
```

:::tip Link
[예제 프로젝트](https://github.com/advanced-webapps-class/gulp-test)
:::