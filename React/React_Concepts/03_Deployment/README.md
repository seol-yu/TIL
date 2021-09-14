<br />
<a href="https://github.com/seol-yu/TIL/tree/master/React/React_Concepts">
  <img src="https://github.com/seol-yu/TIL/raw/master/images/react-badge-logo.png?raw=true" height="30" style="max-width: 100%;">
</a>
<br />

### 목차

[Github에 배포 및 다른 방법](#Github_배포)

[Netlify 배포](#Netlify)

[Netlify 최종 배포와 현업에서의 배포 과정](#Netlify_배포_현업_배포)

<br />

---

<br />

### Github_배포

<br />

**Deployment**: https://create-react-app.dev/docs/deployment

<br />

깃허브 레포지토리 만들고 플젝 올리기

만약 문제가 생기면

`open ~/.gitconfig` <- 윈도우는 start 명령어

글로벌적으로 설정되어 있는 gitconfig 열어서 유저 정보 정확한지 확인

<br />

Settings - GitHub Pages - master 브랜치

배포하면 얻게 될 주소 나옴

<br />

package.json에서

![deployment](./imgs/deployment.png)

`yarn add gh-pages`

![deployment2](./imgs/deployment2.png)

`yarn build`

`npm run deploy`

깃헙 페이지s에서 브랜치 gh-pages로

<br />

이 방법은 리액트 라우터에서 제공하는 브라우져 히스토리 지원 안됨

<br />

[목차로](#목차)

<br />

---

<br />

### Netlify

<br />

`npm install netlify-cli -g`

json 파일에 위에서 작성했던 homepage 부분 지우고

`netlify deploy`

깃허브로 가입

Create & configure a new site

Publish directory는 build 폴더

<br />

위 과정으로 했더니 빈화면 떠서

node_modules 폴더와 build 폴더 삭제하고

`npm i`

`yarn build`

`netlify deploy`

...

<br />

[목차로](#목차)

<br />

---

<br />

### Netlify_배포_현업_배포

<br />

Netlify로 하면 임시 url 생김

변경/추가한 내용 정상적으로 동작하는지 확인한 후

공식적으로 배포

<br />

개발자들이 개발해서 변경 커밋, 수정 내용 마스터 브랜치에 반영

qa와 검증 후 main repository에 반영

주기적으로 dev라는 환경에 배포, 반영

dev(테스트용 데이터베이스 담은 환경)에서 확인

주기적으로 배포하는데

staging 환경에서 변경사항 한번 더 확인하고 문제 없으면

production prod로 배포(사용자가 확인)

<br />

변경 -> deploy -> Draft URL로 확인 -> 배포

`netlify deploy --prod`

동일하게 build 쓰고

최종 url 나옴(사용자에게 배포)

https://habit-tracker-pjtlsy.netlify.app

<br />

[목차로](#목차)

<br />