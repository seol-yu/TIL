<br />
<a href="https://github.com/seol-yu/TIL/tree/master/Git/Git_Master" target="_blank"><img src="https://github.com/seol-yu/TIL/blob/master/images/git-badge-logo.png?raw=true" height=30 /></a>
<br />

### 목차

[디버깅 빠르게](#디버깅)

[문제 원인 빠르게 찾기](#문제_원인_빠르게_찾기)

[터미널 UI 인터페이스](#터미널_UI_인터페이스)

[깃 설정](#깃_설정)

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

bisect 다 이용하고 해당하는 commit 찾았다면

git bisect 다음에 reset 이용해서

`git bisect reset`

원래 브랜치로 돌아가기

<br />

[목차로](#목차)

<br />

---

<br />

### 터미널_UI_인터페이스

<br />

터미널 + UI

tig

brew 있다면 `brew install tig` 로 설치 가능

<br />

tig 이용하면 간단히 history 확인 가능

commit에서 enter치면

commit 안에 있는 내용 확인 가능

commit title과 description 볼 수 있다

<br />

수정된 파일들도 확인 가능

파일에서 enter 치면

파일 안에서도 내용 확인 가능

<br />

Q 누르면 이전 메인 창으로 이동

VIM 명령어 이용해서 확인 가능

g 명령어 이용해서 grab 이용 가능

/ 이용해서 문자열 검색 가능

<br />

[목차로](#목차)

<br />

---

<br />

### 깃_설정

<br />

로컬 작업 내용 초기화하고 싶을 때, 로컬 내용 모두 다 무시하고 싶을 때

`git reset --hard HEAD`

이걸 이용하는데

`gh` 만 이용해서 쓸 수 있도록 설정하기

<br />

로컬 작업 내용을 stash에 세이브 할 때

`git stash save`

하는데 `gss` 라고 간단히 설정해보기

<br />

리스트 볼 땐 `gsl`

`gsa`  <- 최근 stash가 된 아이 적용

<br />

`git cad`   <- 빠르게 . 이용해서 커밋하기

<br />

깃 커밋할 때도

`git ca "message"` 이런 식으로

자주 쓰는 명령어들을 alias나 터미널 단축키로 -> 생산성 향상

<br />

`start ~/.gitconfig` 

`git config --global -e`

이용해서 VSCode 열어서

자주 쓰는 명령어와 옵션 컴비네이션 등록해두고 쓰기

```
[alias]
	s = status
	co = checkout
	c = commit
	b = branch
		list = stash list
		save = stash save
```

<br />

위처럼 설정한 alias 는 항상 git 다음에 써야하는데

그냥 `gs` 이런 식으로 쓰기 위해선

terminal에서 설정

쉘 자체에 있는 alias를 이용해서 ..

<br />

[목차로](#목차)

<br />