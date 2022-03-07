리액트 네이티브: 페이스북에서 만든 오픈소스 모바일 응용 프로그램

네이티브 앱 개발을 위한 자바스크립트 프레임워크

크로스 플랫폼이라 iOS, 안드로이드에서 동일하게 동작 시킬 수 있는 API

<br />

JS Bundle 만들기

2가지 방법

1. Expo CLI

   * 개발 환경 구축 용이
   * 실제 개발이 쉽고 편함
   * OS Layer와 직접 상호작용은 불가능(Java, Kotlin, obj-C, Swift로 추가 작성 불가)
   * Expo에서 제공해주는 모듈만 사용 가능
   * Expo Client에서는 잘 동작하지만 실제 Simulator 및 단말기에서 잘 동작하지 않을 수 있음
   * 개발 관점에서의 자유도 낮음

2. React Native CLI

   * Expo로는 접근하지 못하는 Native 기능에 접근 가능

     (Native 모듈 사용 자유도 높음)

   * 원하는 언어로 추가 작성 가능(Custom Native 모듈 사용 가능)

   * 필요한 기능이 있는 경우 모듈을 직접 제작 가능

   * OS Layer와 직접적인 상호작용 가능

   * 초기 개발환경 구축 및 실제 앱 개발 시 다소 시간 소요

   * Mac일 경우에만, iOS / Android 지원

<br />

---

<br />

설치

nvm (Node Version Manager)

* `nvm version`

node.js

* `nvm install 버전`
* `node -v`
* `nvm ls` <- 설치한 항목들 나옴
* `nvm use 사용할버전`

npm (Node Package Manager)

Android Studio

* SDK 매니져 - 안드로이드 10.0 (Q) 설치

  Show Package Details  가서

  * Android SDK Platform 29
  * Sources for Android 29
  * Intel x86 Atom_64 System Image
  * Google Play Intel x86 Atom System Image

  체크하고 Apply 눌러서 설치

* AVD 매니져 가서

  Create 가상 디바이스 가서 하나 골라서 .. SDK 확인 후 ..

  가상 디바이스 추가 (디바이스 매니져 가서 함)

* 환경 변수 설정

  SDK 로케이션 참고

  ANDROID_HOME 환경 변수 추가 후 Path 환경 변수 편집에서 platform-tools 추가

* 터미널에서 `adb`   

JAVA

* oracle java 구글링해서 Java SE 11(LTS) JDK 다운로드
* `java --version`
* java_home 환경변수 설정

XCode

Visual Studio Code

CocoaPod

* `sudo gem install cocoapods`
* `pod --version`

React Native CLI

* `npm install -g react-native-cli`
* `react-native --version`

<br />

---

<br />

`react-native init --version 0.61.5 my_first_app`

<br />

---

<br />

Android Emulator 구동

`npm start`

안드로이드 스튜디오 - AVD 매니져 - 플레이버튼

`npm run android`

<br />

---

<br />

새로운 프로젝트 생성

`react-native init --version 0.61.5 react_native_01`

<br />

`npm start`

`react-native run-android`

<br />

App.js 를

```js
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
    render() {
        return (
            <View>
            	<Text> Hello World </Text>
            </View>
        )
    }
}

export default App;
```

<br />

---

<br />

`npm install @react-native-picker/picker --save`

<br />

`cd ios`

<br />

`npx pod-install`

<br />

---

<br />

`npm install @react-native-community/slider --save`

<br />

`npx pod-install`

<br />

---

<br />

React Navigation <- 화면 전환

<br />

프로젝트 생성

`react-native init --version 0.61.5 react_navigation_01`

=> `react-native init react_navigation_01` 명령어 사용함

<br />

`npm install @react-navigation/native`

<br />

`npm install react-native-screens react-native-safe-area-context`

<br />

ios 폴더에서

`npx pod-install ios`

<br />

stack navigator library 설치

<br />

`npm install @react-navigation/native-stack`

=> `npm install @react-navigation/stack` 명령어 사용

https://reactnavigation.org/docs/stack-navigator/

=> `npm install react-native-gesture-handler` 도 설치함

=> `npm install @react-native-masked-view/masked-view` 도 설치

<br />

---

<br />

Stack.Navigator 태그에서 screenOptions로 공통 Style 적용 가능

Stack.Screen에서 다르게 할 수 있음

<br />