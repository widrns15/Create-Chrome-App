# Create-Chrome-App 🌐


![스크린샷 2023-07-31 오전 9 30 15](https://github.com/widrns15/Create-Chrome-App/assets/85780501/0d077ea7-71f9-4e6b-94f5-26ced720dae6)



> #### 바닐라 JS로 크롬 앱 만들기
>
> https://widrns15.github.io/Create-Chrome-App/

</br>

## 1. 제작 기간

- 2023/02/03 ~ 2023/03/08

</br>

## 2. 사용 기술

<p>
<img src="https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5"/>
  
<img src="https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6"/>
  
<img src="https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=JavaScript"/>
 </p>
</br>

## 3. 프로젝트 목표

- 앱 클론 코딩을 통한 JavaScript 기초 학습
- 이전에 배웠던 HTML, CSS, SASS 복습
- 외부 API 활용

</br>

## 4. 주요 기능

#### 1. 랜덤 배경 이미지와 랜덤 명언 (background.js + quotes.js)

- 행렬을 형성하여 랜덤 배경화면, 명언 지정
- Math.random, Math.floor 기능을 사용한 행렬 순번 randomize

#### 2. 실시간 시계 (clock.js)

- Date 객체를 사용하여 날짜, 시간 관련 정보 표현
- setInterval, setTimeout: 일정주기, 일정 시간 이후로 실행되는 타이머 설정

#### 3. 로컬 스토리지를 사용한 로그인 (greetings.js)

- submit event가 발생할 시, localstorage에 유저 정보 저장
- 유저 정보 저장 유무에 따라 기존의 form을 hidden, 이후 greeting message를 보이게 함

#### 4. 로컬 스토리지를 사용한 투두리스트 (todo.js)

- 유저로부터 submit된 value를 localstorage에 string화한 객체(id와 todo)배열로 저장
- localstorage에 저장된 정보의 유무로 리스트 표현
- 리스트의 추가 및 삭제 기능

#### 5. 실시간 현재 위치와 날씨 - geolocation (weather.js)

- openweathermap의 API를 사용하여 실시간 위치, 날씨, 기온 정보를 표현
