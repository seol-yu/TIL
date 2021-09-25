<br />
<a href="https://github.com/seol-yu/TIL/tree/master/Git/Git_Master" target="_blank"><img src="https://github.com/seol-yu/TIL/blob/master/images/git-badge-logo.png?raw=true" height=30 /></a>
<br />

### 목차

[실수 만회 방법들](#실수_만회)

[커밋된 아이들 취소](#커밋_취소)

[커밋 수정](#커밋_수정)

[리셋](#reset)

[실수 만회 꿀팁](#실수_만회_꿀팁)

[취소사항 버전으로 남기기](#취소사항_버전으로)

[이전 커밋 수정](#이전_커밋_수정)

[필요없는 커밋 삭제](#커밋_삭제)

[커밋 분할](#커밋_분할)

[커밋 합치기](#커밋_합치기)

[소스트리 활용](#소스트리_활용)

<br/>

---

<br/>

### 실수_만회

<br />

주의: 깃 히스토리 수정은 로컬에 있는 것들만. 서버에 이미 업로드한거는 다른 사용자와 공유가 된 건 절대 X

푸시하더라도 나 혼자 진행하는 프로젝트는 수정O

히스토리를 다시 작성하는 것은

새로운 커밋 만드는 것과 동일하므로 

<br />

cf) WIP 은 Working In Progress 아직 일이 진행 중이다

<br />

[목차로](#목차)

<br />

---

<br />

### 커밋_취소

<br />

`git checkout` 은 해시코드, 브랜치, 태그로 전환할 때 쓰임

`git checkout -- file` 파일도 초기화 가능

but, 명령어 하나로 다양한 기능하는 것은 직관적이지 않다

그래서

깃 2.23 이후에는 특정 기능별로 새로운 명령어가 생김

<br />

브랜치 전환할 때 `git switch` 

`git restore 파일이름` 

`git restore .`  <- 프로젝트 전체 안에 있는 working directory에 있는 파일들 초기화

<br />

git add 해서 staging area로 파일 가져간거 다시 working directory로 가져오려면

`git restore --staged 파일`

<br />

`git reset HEAD .`  <- reset은 내가 가고자 하는 포인터 가리킬 수 있다. 특정 포인터(HEAD) 해당 버전에 맞게 초기화 해달라. staging area에서 working directory로 가져옴

<br />

`git restore --staged .`  <- 모든 파일을 다시 working directory로 옮기기

`git restore .`  <- 아무 옵션없이 전체 디렉토리로 하면 깨끗하게 정리가 된다

<br />

`git restore --source=`  <- 어떤 커밋으로부터 파일을 초기화할 것인지 설정 가능. 해시코드 작성해도 되고 HEAD 포인터를 써도 된다

참고로 `git show 해시코드`   <- 커밋 정보 확인

예를 들어 `git restore --source=HEAD~2 payment-ui.txt`

`git status` 해보면 해당 파일 삭제된 것 확인

<br />

[목차로](#목차)

<br />

---

<br />

### 커밋_수정

<br />

커밋 메시지를 실수로 잘못 작성했을 때

`git commit --amend -m "Add new file"`

이런식으로 변경

<br />

그런데 파일 내용을 잘못 썼거나 내용 충분히 수정 못했다면

`vim` 혹은 `open`(윈도우는 start) 써서 파일 수정하고

`git add .`

`git commit --amend`

이렇게 하면 된다

그럼 에디터 열리면서 ..

저장, 파일 종료하고 히스토리 보면 커밋 메시지는 그대로이지만

`git show HEAD` 파일이 원하는대로 수정된 것 확인

최신 커밋에서 타이틀, 수정 내용 업데이트는 `amend` 이용

당연히 깃 푸시 안했을 때 이용할 수 있는 유용한 기능

<br />

[목차로](#목차)

<br />

---

<br />

### reset

<br />

특정한 커밋으로 모든 것을 초기화시켜주는 명령어

<br />

만약 최근 커밋 두개 마음에 안든다면

HEAD에서 2번째 것 가리키면 될 것이다(최근 두개 없어지도록)

`git reset HEAD~2`

초기화한 커밋은 히스토리에서 사라졌지만 작업하고 있던 것은 working directory에 남아있음

`git reset --mixed` 이 옵션 쓴 명령어와 비슷하다. 커밋은 히스토리에서 사라졌지만 작업하고 있던 내용들은 working directory에 남아있는

<br />

`git restore .`  <- 일단 작업 내용 지우고

새로 추가된 파일은 restore로 지워지지 않으므로

`git clean -fd`

이 상태에서

`git reset --soft HEAD~1`  <- 작업하고 있던 내용들이 staging area로 들어와있음

<br />

즉 커밋 히스토리 삭제하면서 내 working directory 로 가지고 오고 싶다면 --mixed 옵션을,

staging area로 가지고 오고 싶다면 --soft 옵션을

내 local에도 가지고 오지 말고 commit 에서도 지워주고 그냥 완전히 삭제하려면

git reset hard 내가 마지막으로 커밋한 이후에 수정한 모든 local에 파일들을 초기화한다는 것과 동일하다

`git reset --hard HEAD`  <- 로컬에서 작업하던 모든 파일들의 내용이 없어진, 초기화된 것 확인

`git reset --hard HEAD~2`   <- 이런식으로 쓰면 working directory랑 staging area에 파일없이 커밋 지움

<br />

이처럼

reset은 특정 커밋으로 초기화할 수 있고

초기화할 때 변경했던 모든 내용들을 다시 local에 가지고 오거나 완전히 삭제하거나

`reset --hard HEAD` 를 이용하면 local 에서 작업하고 있는 내용들 깔끔하게 초기화해줌

<br />

[목차로](#목차)

<br />

---

<br />

### 실수_만회_꿀팁

<br />

git reset 을 이용하면 git history 변경할 수 있는데 

이렇게 했다가 다시 예전으로 돌아가고 싶다면?

<br />

`git reflog` 라는 명령어

reflog는 feference log, log를 참조한다는 뜻

바로 이전 HEAD가 가리키고 있었던 내용들을 다 기억하고 있음으로써 우리가 원하는 시점으로 다시 돌아갈 수 있게 된다

<br />

`git reflog` 해보면

여태까지 실행했던 명령어들, 그것으로 인해 변경되었던 HEAD가 가리키고 있었던 포인터까지 확인할 수 있다

돌아가고 싶은 해시코드 복사해서 q 눌러서 돌아간 후에

`git reset --hard 해시코드`

헤드가 지정한 해시코드를 가리킴

<br />

이렇게 `git reflog` 를 이용하면 실수 했더라도 다시 예전 상태로 돌이킬 수 있음

언제든지 돌아갈 수 있지만 커밋이 이전에 된 상태에서만 가능

<br />

[목차로](#목차)

<br />

---

<br />

### 취소사항_버전으로

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 이전_커밋_수정

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 커밋_삭제

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 커밋_분할

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 커밋_합치기

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 소스트리_활용

<br />



<br />

[목차로](#목차)

<br />