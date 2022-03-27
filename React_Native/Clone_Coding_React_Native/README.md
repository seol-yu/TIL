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