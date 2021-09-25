<br />
<a href="https://github.com/seol-yu/TIL/tree/master/Git/Git_Master" target="_blank"><img src="https://github.com/seol-yu/TIL/blob/master/images/git-badge-logo.png?raw=true" height=30 /></a>
<br />

### 목차

[Stash](#Stash)

[Stash 데모](#Stash_Demo)

[소스트리로 Stash 활용](#소스트리_Stash_활용)

<br/>

---

<br/>

### Stash

<br />

아직 커밋할 단계가 아닌데 

다른 브랜치 checkout 해야하는 상황

<br />

깃에는 Stash Stack 이라는 것이 있다

<br />

커밋할 준비가 안된 파일들을 커밋하기 보다는

stash stack에 잠시 저장

후에 다시 working directory로

<br />

각각의 시도를 잠시 저장해두고 싶을 때도 유용

<br />

[목차로](#목차)

<br />

---

<br />

### Stash_Demo

<br />

working directory에서 열일하고 있는 중에

아직 커밋할 준비가 안되어있는데 다른 브랜치 가야하는 등의 상황에서

작업사항들

Stash에 잠시 저장해두기

<br />

`git stash push`  <- 그냥 아무 타이틀 없이 저장하기

메시지 적으려면 `git stash push -m "메세지"`

이렇게 stash에 저장하면

working directory와 staging area 깔끔해진 것 확인

<br />

또 파일 수정 후

스테이징 area에 추가한 후(`git add .`) 다시 `git status` 보면

파일 수정되었고 staging area에 있는 것 확인

index에 있는 staging area에 있는 것을 유지하면서 stash에 저장하고 싶다면

--keep-index 쓰면 된다

`git stash push -m "second try" --keep-index`

<br />

새로운 파일 만들어서 stash 해보면

`echo new > new.txt`

`git status -s`  <- 새로운 파일 트래킹 안되고 있음

`git stash`

`git status -s`  <- stash에 저장이 되지 않음 확인

아직 트래킹 되지 않은 파일들도 stash에 포함하고 싶다면 untracking 옵션 이용

`git status -u`

`git stash list`  <- 스태시 리스트 확인

<br />

stash@ 다음은 아이디같은 것

아래부터 쌓인것임

`git stash show stash@{3}`  <- stash에 어떤 것이 수정되었는지 확인

`git stash show stash@{3} -p`  <- 더 자세히 

<br />

다른 브랜치 본 후 다시 내가 작업하던 것으로 돌아오려면

`git stash list`

`git stash apply`  <- 아무 옵션 없으면 스택에서 제일 위에 것이 자동으로

`git stash apply stash@{1}`  <- 특정 스택

작업하던 것들이 나의 working directory / index에 온 것 확인

<br />

`git stash list`  <- (그대로 있는 것 확인)

`git restore .`  <- 현재 디렉토리 깔끔하게

`git clean -fd`  <- 깔끔하게 지워

<br />

`git stash pop`  <- 리스트 하나 준다. 제일 위의 내용이 working directory로 옮겨져 나옴

stash 적용하면서 목록 그대로 유지하려면 `apply`

하나씩 가지고 나오면서 목록에서 제거하려면 `pop`

더이상 필요없는 id 삭제하려면 `git stash drop stash@{0}`

전체 다 삭제하려면

`git stash clear`

<br />

지금 브랜치가 아니라 stash에 있는 아이들을 적용하면서 새로운 브랜치 만들고 싶다면

`git stash branch` 라는 명령어 이용해서 브랜치 이름 작성하면 된다

`git stash branch 새로운브랜치명`

<br />

[목차로](#목차)

<br />

---

<br />

### 소스트리_Stash_활용

<br />



<br />

[목차로](#목차)

<br />