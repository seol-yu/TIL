<br />
<a href="https://github.com/seol-yu/TIL/tree/master/Git/Git_Master" target="_blank"><img src="https://github.com/seol-yu/TIL/blob/master/images/git-badge-logo.png?raw=true" height=30 /></a>
<br />

### 목차

[깃허브의 필요성](#Github_Necessity)

[오픈소스 프로젝트 참여](#오픈소스_참여)

[깃허브 계정 만들기](#깃허브_계정_만들기)

[깃허브 프로젝트 내 PC에 가지고 오기](#깃허브_프로젝트_내_PC로)

[나의 커밋을 서버에 저장](#커밋_서버에)

[푸쉬 간편하게 SSH](#SSH)

[Push 심화](#Push_심화)

[이미 만들어진 프로젝트 깃허브에 추가](#프로젝트_깃허브에_추가)

[fetch vs pull](#fetch_pull)

[fetch 심화](#fetch_심화)

[pull 심화](#pull_심화)

[오픈소스 프로젝트 참가법](#오픈소스_프로젝트_참가법)

[UI_사용법](#UI_사용법)

<br/>

---

<br/>

### Github_Necessity

<br />

remote

서버에 나의 깃 repository 업로드해서 다른 pc에서도 접근 가능, 협업

<br />

git - distributed 분산형 시스템

서버에만 정보가 모여있는 중앙집중식과는 달리 

각각의 개발자들이 history를 가지고 있어서 서로 공유, 문제 발생시 복원 가능, 오프라인에서 작업 가능

<br />

local 작업한거 server에 업로드, server에서 작업한거 로컬에 가지고 오기

<br />

서버에서 가지고 올 땐 clone

로컬에서 커밋한 내용 서버 올릴 땐 push

서버 업데이트 내용 로컬에 업데이트 하려면 pull

서버에서 업데이트된 내용이 로컬에서 작업하고 있는 동일한 파일이라면 그냥 pull 하면 merge conflict 발생할 수 있는데 이럴 땐 머지 충돌 해결

<br />

나의 프로젝트 관리, 로컬 깃 리포지토리를 서버에 host해서 협업

workflow 이용

나에게 접근권한이 없고 오픈소스 프로젝트라면?

<br />

[목차로](#목차)

<br />

---

<br />

### 오픈소스_참여

<br />

괜찮은 아이디어

나에게 접근, 쓰기 권한 없으므로

그 repository를 fork해올 수 있다

바로 커밋하는게 아니라 내 리포지토리에 복사해오는 것

<br />

이 상태에서 아이디어 구현해서 forked가 된 리포지토리에 커밋을 하고 

PR, pull request를 작성해서 오픈소스 플젝에 제출

<br />

변경사항 마음에 드는지

오픈소스 플젝 관리자가 PR을 보고 제안을 해주거나 바로 승인/거절

<br />

승인이 되고 난 뒤 오픈소스 플젝에 다른 업데이트된 commit이 있다면 

rebase를 이용해 나의 repository를 최신 버전으로 즉, 오픈소스 플젝과 sync를 해서 

최신 상태 유지.. mergePR할 수 있다

<br />

[목차로](#목차)

<br />

---

<br />

### 깃허브_계정_만들기

<br />

깃허브 repository public으로 만들 때 라이센스 .. 보통은 아파치 많이 씀

각각 찾아보고 뭘 원하는지 골라쓰기

셋팅은 언제든 변경 가능

<br />

Manage access에 협업할 개발자 추가 가능

<br />

[목차로](#목차)

<br />

---

<br />

### 깃허브_프로젝트_내_PC로

<br />

깃 클론 <- 최신 커밋도 가져옴

다운로드는 현재 서버에 있는 버전의 코드가 다운로드

<br />

깃 클론 명령어 다음에 원하는 이름 적어도 됨

<br />

`git remote`  <- 서버에 있는 애 이름 나옴. 기본 설정은 origin

`git remote -v`  <- 오리진이 어떤거 가리키는지 정확한 정보 확인 가능, 현재 있는 폴더에서 다른 깃허브 링크 추가하고 싶다면 나중에 오픈소스 플젝에 참가할 때 fork한 리포지토리에서는 다수의 origin 설정 가능, 그럴 땐

`git remote add 다른이름써도되고 다른githublink`

`git remote -v`  해보면 추가된거 확인

다수의 원격 설정

<br />

`git remote show` 해보면 

`git remote show origin`  <- 해당 리모트 정보 자세히 

<br />

[목차로](#목차)

<br />

---

<br />

### 커밋_서버에

<br />

나의 커밋을 서버에 저장

`echo add > add .txt`

`git add .`

`git commit -m 'Add new file'`

`git push`  <- 로컬 히스토리를 서버에 업데이트

아이디 / 비번 입력

<br />

`git config --global -e`

깃허브 사용자 이름과 이메일로 설정

<br />

[목차로](#목차)

<br />

---

<br />

### SSH

<br />

푸시를 간편하게 하기

SSH key

푸시할 때마다 아이디/비번 쓰는건 번거로우니까

secure shell protocol

터미널과 서버간 아이디 비번 유지해주는 방법

<br />

서버에는 public key 제공

내 컴퓨터에는 private key 생성해서

<br />

깃허브 페이지에서 아바타 선택하면 계정 옵션들

셋팅가서

SSH and GPG keys 들어가서

가이드 보고 키 생성해서 등록하기

<br />

title에는 seolyu-Mac 이런식으로 하고..

그 후엔 검증된 유저로 커밋해나갈 수 있다

<br />

`ssh-keygen -t rsa -C "leeseolyu@gmail.com" -f "leeseolyu"`

~/.ssh/config 수정

```
# leeseolyu - Mac
Host github.com-leeseolyu
		HostName github.com
		User git
		IdentityFile ~/.ssh/leeseolyu
```

깃헙-셋팅스-SSHandGPGkeys-키등록(leeseolyu.pub)

`git clone git@github.com-leeseolyu:leeseolyu/testgit.git`

<br />

[목차로](#목차)

<br />

---

<br />

### Push_심화

<br />

깃헙 레포지토리 와서 commit history 보면..

만약 서버 새로운 다른 커밋이 있는 경우(깃헙에서 수정하고 커밋)

로컬에서는 아직 없는 상태에서

파일을 수정해보자

그냥 push하면 서버에서 push를 reject

리모트 서버에 변경사항이 있기에

<br />

무조건 업데이트 하고 싶다면

`git push -f`  <- 서버는 거짓이고 내 것이 진짜다

방금 서버에서 작업한거 지워지고 로컬에서 푸시한 것으로 대체됨

<br />

서버 변동사항은

`git pull`

`git fetch`

나의 로컬 히스토리를 서버에 맞게 업데이트 후

나의 커밋들을 rebase하고 push

<br />

간혹 기존 git history를 rebase를 이용해서 변경하거나 history 변경했다면

부득이하게 force 옵션 이용해서 push

<br />

[목차로](#목차)

<br />

---

<br />

### 프로젝트_깃허브에_추가

<br />

이미 만들어진 플젝 깃허브에 추가하기

<br />

먼저 깃허브에서 새로운 repository 만든다

<br />

기존 플젝에서 `git remote add origin 링크`

`git remote` 확인해보면 origin 나옴

`git push`

로컬에 있는 커밋들이 서버에 올라감

<br />

[목차로](#목차)

<br />

---

<br />

### fetch_pull

<br />

git에서 로컬과 서버와 함께 연동해서 작업하는 경우

나의 로컬에서는 서버에 있는 branch를 origin이라고 붙여서 표기

여기에서 server에 새로운 commit이 발생했다면

fetch를 이용하는 경우에는

server에 있는 git history를 받아와서 나의 git history를 업데이트

origin/master가 서버에서 가져온 새로운 커밋을 가리킴

즉, fetch는 히스토리를 업데이트하지만 

내가 현재 바라보고 있는 작업 환경 HEAD는 그대로 유지

history는 서버에서 가져온 c라는 커밋을 가지고 있지만 여전히 나의 local master branch는 내 로컬의 최신 커밋 b 가리킴

<br />

반대로 pull 이라는 명령어는 server에 있는 history를 가지고 오면서

나의 local에 있는 내용을 함께 merge

서버의 커밋 히스토리 c를 받음과 동시에 origin master와 나의 master가 동시에 서버에서 가져온 커밋 c를 가리킴

<br />

[목차로](#목차)

<br />

---

<br />

### fetch_심화

<br />

서버에 새로운 커밋 추가하고

로컬에 와서

`git fetch` 해보면

서버 히스토리 가져옴

origin/main과 origin/HEAD는 최신 커밋(서버에서 가져온) 가리키지만

나의 local HEAD는 여전히 내 로컬에서의 최신 커밋 가리키는 것 확인

<br />

즉, 작업하고 있는 HEAD 그대로 유지하면서

server에 업데이트된 history 정보만 가지고 올 때 `git fetch`

<br />

`git fetch 서버의이름`

`git fetch 서버의이름 특정브랜치명`

<br />

[목차로](#목차)

<br />

---

<br />

### pull_심화

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 오픈소스_프로젝트_참가법

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### UI_사용법

<br />



<br />

[목차로](#목차)

<br />

