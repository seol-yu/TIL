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



<br />

[목차로](#목차)

<br />

---

<br />

### 실수_만회_꿀팁

<br />



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