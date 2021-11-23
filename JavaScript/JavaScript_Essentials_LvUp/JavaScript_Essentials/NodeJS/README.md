## Node.js

<br />

### 목차

[개요 및 설치](#개요_설치)

[NVM 사용법](#NVM_사용법)

[NPM 개요](#NPM_개요)

[개발 서버 실행과 빌드](#개발_서버_실행과_빌드)

[유의적 버전(SemVer)](#SemVer)

[NPM 프로젝트의 버전 관리(.gitignore)](#깃이그노어)

<br />

---

<br />

### 개요_설치

<br />

Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임(프로그래밍 언어가 동작하는 환경)

1. 컴퓨터
2. 브라우저

<br />

HTML, CSS, JavaScript만 가지고 개발하면 비효율적

컴퓨터에 개발 도와주는 여러 모듈들 설치해서 개발

이런 모듈들은 브라우저에서 직접적으로 동작할 수 없기에 Node.js 환경에서 HTML, CSS, JavaScript로 변환

변환 작업에 대한 명령, 환경 - Node.js 환경에서

<br />

nodejs.org에서 Node.js 설치(LTS - Long Term Supported 장기적으로 안정되고 신뢰도 높은 지원이 보장되는 버전. 유지/보수와 보안(서버 운영 등)에 초점을 맞춰 대부분 사용자에게 추천되는 버전)

다른 node.js 버전에서도 개발 진행하려면 node.js 설치 전에 버전 언제든 바꿀 수 있도록 노드 버전 매니저 설치 - nvm(nvm-sh/nvm 깃헙 저장소 가서 installing and updating 설치 코드 `curl -o- https://.......` 복사해서 VSCode 가서 터미널에 붙여넣고 엔터. `nvm --version` 윈도우는 nvm-windows 검색해서 nvm-windows 깃헙 저장소에서 다운로드 나우 선택해서 nvm-setup.zip 다운받고 압축 풀어서 설치)

<br />

[목차로](#목차)

<br />

---

<br />

### NVM_사용법

<br />

`nvm ls`

ls는 리스트 약어

<br />

`nvm install 설치하려는노드JS버전`

`nvm install 안정적인짝수버전12.14.1`

<br />

`nvm ls` 해보면 설치 확인

<br />

`nvm install 12.21.0` 다른 버전 설치

<br />

`nvm ls` 2가지 버전 확인 가능

<br />

`nvm use 12.14.1`

팝업창 나오면 '예'

<br />

`nvm ls` 해보면 Currently using 버전 확인 가능

<br />

`node --version` 해보면 노드 버전 확인 가능

<br />

프론트엔드 개발 프로젝트 node.js 버전에 영향 받을 수 있다

<br />

다른 버전으로 바꾸려면

`nvm use 12.21.0`

팝업창 '예'

`nvm ls` 해보면 사용 버전 바뀐거 확인 가능

`node --version` 해보면 버전 바뀐거 확인 가능

<br />

`nvm install 14.16.0`

`nvm ls`

<br />

`nvm use 12.14.1`

`nvm ls`

설치했는데 더이상 필요없는거 컴퓨터에서 지우려면

`nvm uninstall 12.21.0`

해당 버전 삭제

`nvm ls` 해보면 삭제 확인 가능

<br />

프로젝트에 가장 최적화된 노드 버전 사용할 때 사용

<br />

노드JS 홈페이지에서 New security releases.... 선택해보면

페이지 하단에 현재 지원하는 최신 버전 확인 가능

10버전 이상 추천

일반적으로는 12버전 추천

최적화된 버전은 프로젝트에 따라 달라질 수 있다

<br />

`nvm --help`

nvm 여러 명령들 확인 가능

<br />

[목차로](#목차)

<br />

---

<br />

### NPM_개요

<br />

NPM(Node Package Manager)은 전 세계 개발자들이 만든 다양한 기능(패키지, 모듈)들을 관리

노드 설치할 때 같이 설치됨

<br />

`npm install 특정패키지`

백만개 이상의 패키지있음

패키지 <- 모듈, 기능

이미 완성된 모듈을 가져다가 프로젝트에 활용

<br />

링크, 스크립트 태그로 활용한 것들도 패키지

<br />

Trade-off(상충 관계)

학습 난이도, 구성 복잡하지만 관리 효율, 손쉬운 기능 고도화

<br />

`npm init -y` 프로젝트 시작

package.json 파일 생성됨

<br />

```json
{
  "name": "test",  // 프로젝트 어떤 이름인지 표시. 폴더 이름 그대로. 변경 가능
  "version": "1.0.0",  // 프로젝트 버전 명시
  "description": "",  // 프로젝트 설명
  "main": "index.js",  // 우리도 직접적으로 npm 생태계에 업로드할 수 있는 패키지 만들 수 있는데 현재 프로젝트를 패키지처럼 만들어서 npm 생태계 업로드할 때 쓰는 옵션. 프로젝트할 땐 필요 없는 옵션
  "scripts": {  // 현재 프로젝트 내부에서 사용할 수 있는 여러가지 스크립트 명령 관리
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

<br />

`npm install parcel-bundler -D`

설치할 패키지 이름은 parcel-bundler

D 플래그 붙이기

<br />

node_modules 폴더

package-lock.json 파일 만들어짐

<br />

node_modules 폴더에는 수많은 폴더들 있는데 parcel-bundler 폴더도 확인할 수 있다

패키지 = 모듈

<br />

왜 설치한 패키지 외에 수많은 폴더들이 있냐하면

parcel-bundler 패키지 만들어지고 프로젝트에 활용될 때 필요한 또다른 패키지들

<br />

parcel-bundler의 package.json 보면 dependencies 에 사용하는 패키지들 확인 가능

<br />

처음 만들어졌던 package.json 파일 보면 devDependencies에 parcel-bundler 설치한 패키지 생긴거 확인 가능

현재 프로젝트에 어떤 패키지들 사용하고 있고 어떤 버전인지

<br />

`npm install lodash`

package.json의 dependencies에 lodash 확인 가능

<br />

node_modules 삭제해도

패키지 목록이 package.json에 명시되어있어서 `npm install` 하면 (`npm i`)

node_modules 설치됨

<br />

package-lock.json 파일에는 package.json에 명시된 모듈들 내부에 사용되는 패키지들에 대한 정보가 자동으로 들어감

package-lock.json <- 자동으로 관리되는 파일. 잠금처리된 파일

package.json <- 내가 직접적으로 관리

package-lock.json, package.json 지워지지 않게 하기

<br />

-D 붙여서 설치하면 devDependencies에

붙이지 않으면 일반적인 dependencies에

`npm install -D 설치할모듈이름` <- 개발용 의존성 패키지 설치

`npm install 설치할모듈이름` <- 일반 의존성 설치

<br />

개발용 의존성 패키지는 개발할 때만 필요하고 웹 브라우저에서 동작할 땐 필요하지 않은거고

일반 의존성은 웹 브라우저에서 동작할 때 필요할 수도 있다는 것을 전제함

<br />

-D는 --save-dev 의 약어

개발용으로만 쓰는 패키지

<br />

[목차로](#목차)

<br />

---

<br />

### 개발_서버_실행과_빌드

<br />

Open with Live Server 말고

터미널에서

`parcel index.html` 로컬 환경에서 개발용으로 서버를 열어서 그 서버에 접근해서 내가 만든 프로젝트를 브라우저에서 확인하겠다

명령어 쓰면 zsh: command not found: parcel 뜨는데

package.json 가서

scripts 옵션에다가

"test" 부분 지우고

"dev": "parcel index.html" 작성하기

위와 같이 작성하면

현재 프로젝트에서만 저 명령어가 동작하게 되는데

parcel-bundler에서 개발 서버를 열어주는 기능을 동작시킬 수 있다

<br />

`npm run dev`

dev <- 개발. 개발 서버를 열겠다

<br />

http://localhost:1234

1234 포트 번호.. 컴퓨터 내에서 특정한 페이지로 접근할 수 있는 일종의 주소

1234 포트에 현재 프로젝트가 실행됐다는 의미

개발자 도구 열어보면 main.js에 작성한거 확인 가능

<br />

main.js에다가

```javascript
import _ from 'lodash';

console.log('hello world');
```

<br />

lodash 폴더 가보면 package.json 있는데 보면 여러 내용들이 있고

main 옵션에 lodash.js 쓰여있음

import _ from 'lodash;' <- lodash 패키지에서 package.json에 명시된 main 옵션에 lodash.js 파일 가져와서 우리의 main.js에서 활용

<br />

lodash.js 보면 활용할 수 있는 여러가지 자바스크립트 내용들 작성된거 볼 수 있다

<br />

_ <- _변수에 할당해서 활용할 수 있다

<br />

```javascript
import _ from 'lodash';

console.log('hello world');
console.log(_.camelCase('hello world'));
```

<br />

package.json의 scripts에 추가

"build": "parcel build index.html"

```json
"scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"  // 사용자들이 보는 용도의 결과물 출력
  },
```

<br />

Ctrl+C로 개발용 서버 끝내고

`npm run build`

dist 폴더 만들어짐 <- 웹 브라우저에서 동작하는 용도로 만들어진

index.html 코드 다닥다닥 붙어있는데

`코드 난독화` <- 작성된 코드를 읽기 어렵게 만드는 작업

빌드된 결과(제품)는 브라우저에서 해석되는 용도로

용량을 축소하고 읽기 어렵게 만드는 등의 최적화를 거치는 것이 좋다

<br />

js 파일 열어봐도 역시 난독화되어있다

parcel-bundler 패키지가 실제 웹에서 사용해야 되는 lodash 패키지까지 같이 묶어서

번들해서 결과 만든 것

번들(Bundle) <- 우리가 프로젝트 개발에 사용한 여러 모듈(패키지)을 하나로 묶어내는 작업

<br />

[목차로](#목차)

<br />

---

<br />

### SemVer

<br />

`node --version` 해보면 현재 설치된 노드 버전 확인 가능

`npm --version` 해보면 npm 버전도 확인 가능

<br />

특정 프로그램 버전 명시할 때 유의적 버전 개념 쓰는데

숫자 3개 마침표로 구분

<br />

유의적 버전(Semantic Versioning, SemVer)

유의적 <- 의미가 있다

버전에 의미를 부여, 해석

<br />

Major.Minor.Patch

Major 버전 <- 기존 버전과 호환되지 않는 새로운 버전(전혀 새로운 기능 도입 등)

Minor 버전 <- 기존 버전과 호환되는 새로운 기능이 추가된 버전

Patch 버전 <- 기존 버전과 호환되는 버그 및 오타 등이 수정된 버전

<br />

^Major.Minor.Patch

E.g, ^12.14.1

Major 버전 안에서 가장 최신 버전으로 업데이트 가능

<br />

`npm info lodash`

lodash 패키지 정보 확인

latest 최신 버전 확인 가능

실제 설치된 버전은 명시된 버전과 다를 수 있다

node_modules 들어가서 lodash 폴더 가서 package.json 파일 열어보면 아래 version 부분에서 실제 설치된 버전 확인 가능

<br />

`npm install lodash@4.17.20`

해당 버전 설치. 덮어써진다

`npm update lodash` 하면 다시 업데이트

<br />

package.json에서 dependencies에서 lodash에서 버전 ^ 기호 없애면

^ 기호가 메이저 버전이 아닌 마이너 버전은 언제든 최신 버전 유지하겠다란 의미라서

해당 버전 유지

`npm update lodash` 하면 명령 바로 종료되고 업데이트 안됨

즉,

^ 기호 사용한다면

`npm update` 명령어 통해서 마이너, 패치 버전이 언제든 최신 버전으로 업데이트 될 수 있다는 가정하는 것

상황에 맞게 붙이거나 지우기

<br />

[목차로](#목차)

<br />

---

<br />

### 깃이그노어

<br />

따로 버전관리 할 필요 없는 폴더, 파일들은 깃헙 저장소에 push할 필요가 없으므로

예를 들어 .cache, dist, node_modules

<br />

`npm i`

`npm run build`

명령어로 생성되는

<br />

node_modules 용량 크니까 효율 떨어짐

<br />

`git init` 쓰기 전에

.gitignore 파일 만들어서 깃에서 무시할 내용 명시

```
.cache/
dist/
node_modules/
```

<br />

`git init`

`git status` <- 변경사항 추적되는 파일들 확인 가능

`git add .`  <- 각각의 파일들 버전 추적 시작

`git status` <- 변경 사항 추적, 초록 글씨로

`git commit -m '프로젝트 생성'`

`git log` <- 버전 확인

깃헙 저장소 만들고 저장소 주소 복사해서

`git remote add 원격저장소별칭(통상적으로origin) 주소붙여넣기`

`git push origin master`

<br />

[목차로](#목차)

<br />

