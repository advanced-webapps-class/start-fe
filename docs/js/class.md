# Class

## 클래스

```js
function Car(model, year){

    this.SEAT_COUNT = 5;

    this.model = model;
    this.year = year;
}

var car = new Car('k5', 2012);
console.log(car.model);

//new 키워드가 없으면 그 함수는 객체를 반환하지 않는다.
Car('k5', 2012);
```

* 생성자 함수로 구현  
* `this` 키워드 항상 사용 


## 메소드 정의 

```js
function Car(model, year){

    this.SEAT_COUNT = 5;

    this.model = model;
    this.year = year;

    this.start=function(){
        console.log('start');
    };
}

var car = new Car('k5', 2012);
car.start = function(){
    console.log('start');
};
```
* 둘다 바람직 하지 않다    


## prototype 

```js
Car.prototype.start = function(){
    console.log('시동 걸림');
    this.isStart = true;
};
Car.prototype.move = function(speed){
    if(!this.isStart){
        console.log("시동을 걸어주세요!");
        return;
    }
    console.log(this.model + " : "+ speed + "km");
};
```
1. 모든 함수에는 미리 정의된 prototy객체를 가리키는 prototype 프로퍼티
1. 생성자를 통해 생성되는 객체들은 
1. prototype이 가진 프로퍼티들을 똑같이 상속 


## 내장객체 확장

```js
String.prototype.addDaum = function() {
    return this+' Daum';
};

"hello ".addDaum();
```

## 상속 

```js
// 버스 클래스 구현 
function Bus(model, year){
    Car.call(this, model,year); //call()사용 
    this.SEAT_COUNT = 20;
}

Bus.prototype = new Car(); 
Bus.prototype.constructor = Bus;

//Function.call();
//Function.apply();
```

* prototype 스타일의 상속 모델


## 오버로딩  

```js
Bus.prototype.ride = function(){

    if(!this.seat){
        this.seat = [];
    }
    for(var i=0; i < arguments.length; i++){
        this.seat.push( arguments[i] );
    }
};

bus.ride("a","b","c");
 ```   

* 인자가 다른 같은 이름의 메소드
* 가변길이 전달 인자

## 오버라이딩  
```js
Bus.prototype.move = function(speed){

    if(speed > 60){
        console.log("버스는 60km이상이면 위험!");
        speed = 60;
    }
    Car.prototype.move.call(this, speed);
};
bus.move(80);
```
* 상위클래스의 메소드를 재정의

## 클래스 프로퍼티, 메소드

```js
//static
Car.handleNum = 1;

Car.unfoldAirBag = function(airbag){

    // airbag 펼칠 상황인지 체크 

    //
    airback.unfold();
};
```
## private 

```js
function Car(model, year){
    this.getModel=function(){ return model };
    this.getYear=function(){ return year };
}

//즉시 실행 함수
(function(){
    var model  = '';
    var year = '';

    var Car = function(){

    };
    Car.prototype.getModel = function(){
        return model;
    };

    window.Car = Car;
})();
```