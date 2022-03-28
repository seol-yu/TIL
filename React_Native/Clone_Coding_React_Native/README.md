### React Native

Learn once, write anywhere.

<br />

reactnative.dev

<br />

Expo 말고 `React Native CLI` 추천

<br />

https://chocolatey.org/

<br />

윈도우 PowerShell(관리자 권한으로 실행) 에서 `choco` 해보기

안깔려있으면

https://chocolatey.org/install

설치했는데 안되면 파워쉘 껐다 켜기

<br />

초코 설치하고

`choco install -y nodejs-lts openjdk11`

<br />

안드로이드 스튜디오 설치

파일 - 셋팅 가서

SDK Platforms 에서 29 버전 or 30 버전 설치

Android SDK Platform-Tools

Intel x86 Emulator Accelerator

<br />C:\Users\seolyu_lee\AppData\Local\Android\Sdk

<br />

C:\Users\seolyu_lee\AppData\Local\Android\Sdk\platform-tools 에

adb 가 있어야 함

<br />

환경 변수 설정

<br />

Path 등록

%JAVA_HOME\bin

%ANDROID_HOME%\platform-tools

<br />

ANDROID_HOME

C:\Users\seolyu_lee\AppData\Local\Android\Sdk

<br />

JAVA_HOME

경로는

git bash에서 `which javac` 해서

bin 이후 빼고 적기

/c/Program Files/Common Files/Oracle/Java/javapath/javac

안되어서 기존 경로로 함

<br />

---

<br />

`npm i -g react-native`

<br />

`npx react-native init FoodDeliveryApp --template react-native-template-typescript`

<br />

프로젝트 웹스톰 등으로 열어서

`react-native run-android` 해야하는데

`npm run android` 해도 됨

메트로 서버 항상 켜져있어야 함

안드로이드 스튜디오 - AVD 매니저 +Create Viirtual Device 가서

화면 작은거, 특이한 화면 추천 

ex) Nexus 5, 폴드

R 받으면 됨(30 ver)

재생버튼 누르면 실행되는데

`npm run android` 하면 알아서 뜸

<br />

---

<br />

index.js <- 시작

tsconfig.json 에서 "strict": true 

<br />

아이폰 기준으로 코딩하면 안드로이드에서 잘 안깨짐

<br />

app.json 에서 "name"은 바꾸지 말기

<br />

---

<br />

코드 맨 밑 줄 중요

```tsx
export default App;
```

<br />

리덕스 등 비즈니스 로직은 재사용 가능(앱 -> 웹)

<br />

dip 라는 단위 (해상도 같으면 같은 너비 보장)

css 축약형 안됨

ts 자동완성 되므로 추천

https://github.com/vhpoet/react-native-styling-cheat-sheet

<br />

---

<br />

react-native-rename <- 이걸로 이름 바꿨었으나 지금은 잘되는지 모름

<br />

배포 <- 웹뷰는 실시간으로 고칠 수 있어서

<br />

https://fbflipper.com/

`choco install openssl` <- 파워쉘 관리자 권한으로 실행해서

`openssl` <- 안나오면 껐다 켜서

<br />

flipper 연동

`npm i react-native-flipper redux-flipper redux-flipper rn-async-storage-flipper`

에러의 경우

`npm i react-native-flipper redux-flipper rn-async-storage-flipper @react-native-async-storage/async-storage`

버전 문제

`npm i react-native-flipper redux-flipper rn-async-storage-flipper @react-native-async-storage/async-storage --force`

<br />

---

<br />