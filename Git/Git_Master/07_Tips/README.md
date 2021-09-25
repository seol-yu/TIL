<br />
<a href="https://github.com/seol-yu/TIL/tree/master/Git/Git_Master" target="_blank"><img src="https://github.com/seol-yu/TIL/blob/master/images/git-badge-logo.png?raw=true" height=30 /></a>
<br />

### 목차

[디버깅 빠르게](#디버깅)

[문제 원인 빠르게 찾기](#문제_원인_빠르게_찾기)

<br/>

---

<br/>

### 디버깅

<br />

`git blame 원하는파일이름`

해보면

커밋된 해시코드와 누가 도입했는지 날짜와 시간까지 확인 가능

<br />

소스트리에서는

파일 우클 Annotate Selected...

<br />

보통은

파일에서 바로 볼 수 있는데

인텔리J같은거는 기본적으로 그 기능이 포함되어져있고

VSCode에서는 gitlens라는 익스텐션 설치

![1](./imgs/1.png)

<br />

[목차로](#목차)

<br />

---

<br />

### 문제_원인_빠르게_찾기

<br />

bisect  <- 버그 잡는 시간 줄여줄 명령어

디버깅 툴, 성능 분석 했음에도 잘 문제가 파악되지 않았고 이전에는 잘 동작했다면

`git bisect`

커밋 히스토리 보면서 

특정 부분은 good 최근은 bad

빠르게 문제 커밋을 발견

<br />

`git checkout 문제없었던시점커밋해시코드`  <- 문제 없는지 다시 확인

`git bisect start`

B 심볼 생겨난 것 확인

`git bisect good`

`git checkout master`  <- 다시 최신 master 포인터로 돌아가서

다시 한번 최신버전에서 문제 발생하는지 확인해보고 문제 발생하면

`git bisect bad`

<br />

bisecting 시작

이진탐색 알고리즘으로

문제 발생하는지 확인해보고

`git bisect good`

`git bisect bad`

체크해나가기..

<br />

나쁜 커밋 알려줌

<br />

[목차로](#목차)

<br />

---

