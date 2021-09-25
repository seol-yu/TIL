<br />
<a href="https://github.com/seol-yu/TIL/tree/master/Git/Git_Master" target="_blank"><img src="https://github.com/seol-yu/TIL/blob/master/images/git-badge-logo.png?raw=true" height=30 /></a>
<br />

### 목차

[브랜치 왜 꼭 써야할까](#Branch_Necessity)

[브랜치 기본 사용법](#브랜치_기본_사용법)

[머지란?](#merge)

[머지 옵션](#머지_옵션)

[머지의 중요한 컨셉](#머지_중요_컨셉)

[Conflict 해결 방법](#Conflict_해결법)

[VSCode로 Conflict 해결](#VSCode로_Conflict_해결)

[P4Merge로 Conflict 해결](#P4Merge)

[Rebase란](#Rebase)

[브랜치들 사이에서의 Rebase 팁](#Rebase_tip)

[필요한 커밋만](#cherry_pick)

[소스트리 활용](#소스트리_활용)

<br/>

---

<br/>

### Branch_Necessity

<br />

협업 위해 필수

<br />

Git에서 따로 지정안하면 master branch가 기본

즉 별도로 브랜치 따로 만들지 않으면 이 master 한 줄기에서 커밋 발생

보통 master branch는 코드가 검정이 되고 기능에 문제가 없는 정확하게 검증된 제품에 포함이 되어도 되는 내용들만 포함

<br />

만약 새로운 기능인 FeatureA를 개발한다면 master branch 에서 바로 작업하기보다는

feature A 브랜치 새로 만들어서 거기에서 커밋 꾸준히 해나가기

<br />

Feature A를 개발하면서 중간중간 commit e 하고 commit f  하게 되면 헤드는 Feature A branch 인 f 최신 커밋을 바라보고 있다

이렇게 기능별로 리팩토링별로 또는 버그픽스 별로 브랜치 만들어서 일하면

동시다발적으로 다수의 브랜치 위에서 다수의 개발자가 개발 해나감. 

병렬적으로 업무 진행 장점

브랜치 위에서 따로 개발하다가 feature A 브랜치 완성이 되고 검증팀에서 검증이 완료되고 소스코드 리뷰 완료되면 즉 제품 포함 준비 되면

feature A 의 커밋들을 master branch로 merge 할 수 있다

머지 완벽히 되면 feature A 브랜치 필요 없으므로 삭제해주고

이렇게 브랜치 위에서 했던 커밋들을 그대로 마스터 브랜치에 머지하는 경우도 있지만

대부분은 더럽게 다 머지될 필요 없으므로

e와 f의 커밋을 합해서 새로운 커밋을 만든 다음에 그 commit만 깔끔하게 master 브랜치로

<br />

회사마다 프로젝트마다 팀마다 선호 방식 다르므로 팀과 상의해서 진행

하나의 commit으로 깔끔하게 스쿼시드 만들어서 마스터 브랜치에 머지하는 것을 선호하는 경우가 있음

<br />

예전에 버전 관리 시스템은 브랜치 만들 때마다 프로젝트에 있는 전부의 파일들을 복사해서 일일이 따로 따로 관리하는 경우가 허다했다

그래서 브랜치가 많아지면 많아질수록 그리고 브랜치들끼리 서로 바꿀 때 정말 오랜 시간 걸렸는데

Git은 commit과 마찬가지로 

단순히 master branch 에 있는 이전에 commit 을 가리키는 포인트 형태로 만들어지기 때문에 그리고 각각의 스냅샷은 예전에 변경되지 않은 파일들은 링크만 가리키고 있기 때문에 Git 에서 branch를 만들고 branch들 간 전환이 빠르다

<br />

[목차로](#목차)

<br />

---

<br />

### 브랜치_기본_사용법

<br />

브랜치 생성, 이동, 삭제, 확인 등

<br />

`git seolyu`

`git log --graph --all --pretty=format:'%C(yellow)[%ad]%C(reset) %C(green)[%h]%C(reset) | %C(white)%s %C(bold red){{%an}}%C(reset) %C(blue)%d%C(reset)' --date=short`

<br />

`git branch`  <- 현재 리포지토리에 있는 브랜치 확인 가능

위 명령어는 내 컴퓨터 안에만 있는 브랜치들

<br />

원격 Github과 같은 서버에 있는 브랜치들까지 보려면

`git branch --all`

<br />

`git branch new-branch`  <- new-branch 라는 이름의 브랜치 만들어진다

새로운 브랜치는 무언가가 새로 만들어진게 아니라

new-branch 라는 새로운 포인터가 동일한 커밋을 가리키고 있는 것 확인

현재 브랜치는 여전히 마스터 브랜치

<br />

새로 만든 브랜치로 이동하고 싶다면

`git switch 이동하고자하는브랜치명`

<br />

만약 새 브랜치 만들고 그 브랜치로 이동하고자 한다면

`git switch -C 새로운브랜치명`

<br />

`switch` 와 비슷한 명령어 `checkout`

`git checkout 해시코드`  <- 해당하는 커밋으로 이동

checkout 이용하면 언제든지 원하는 버전으로, 원하는 브랜치로

`git checkout master`

<br />

`git checkout -b 원하는브랜치명`  <- 브랜치 만들면서 동시에 이동

<br />

`git branch`  <- 브랜치 목록 보기

`git branch -v`  <- 간단하게 최신 commit 확인

`git branch --merged`  <- 현재 브랜치에 merge가 된 브랜치들 확인 

`git branch --no-merged`  <- master branch에 merge가 되지 않은 즉, master branch에서 파생된 다른 변경사항, 다른 commit이 있는 경우

<br />

`git branch -d 삭제하고자하는브랜치명`  <- 브랜치 삭제

`git push origin --delete 삭제하고자하는브랜치명`  <- 원격 Repository에도 브랜치 삭제

<br />

`git branch --move 이름바꿀브랜치명 새로운브랜치명`  <- 브랜치명 바꾸기

`git push --set-upstream origin 새로운브랜치명`  <- 원격에도 업데이트

<br />

`git log master..원하는브랜치`  <- master 와 원하는 브랜치 사이의 commit log만 확인 가능

`git seolyu master..원하는브랜치`

코드 보고싶으면 `git diff master..원하는브랜치`

<br />

[목차로](#목차)

<br />

---

<br />

### merge

<br />

fast-forward merge <- 마스터 브랜치에서 새로운 브랜치가 생성된 이후 master branch의 변동사항이 없다면 merge 를 할 떄 단순히 마스터 브랜치가 가리키고 있는 포인터를 옮기면 됨

그리고 브랜치 삭제하면 깔끔하게 fast-forward merge 발생

<br />

fast-forward의 단점은 

히스토리에 merge가 되었다는 사실이 남지 않음 커밋으로 안남아서 정말 순수하게 모든 것들을 히스토리에 남기길 좋아한다면 따로 merge commit 만들어라

<br />

예시

master 브랜치에서 각각 feature-a, feature-b 브랜치가 파생되었고 두가지의 커밋이 있는 상황(feature-a 브랜치에는 파일 두개 더 생성된 상황)

브랜치 파생된 이후 마스터 브랜치엔 다른 커밋 없는 상태인 경우,

마스터 브랜치에서

`git checkout master`  <- 마스터 브랜치로 가기

`git merge feature-a`  <- 머지할 브랜치명

이렇게 머지했으면

더이상 feature-a 브랜치 필요 없으니까

`git branch -d feature-a`

<br />

[목차로](#목차)

<br />

---

<br />

### 머지_옵션

<br />

fast-forward merge는

feature-a 브랜치가 있었고 거기서 작업했었고 머지된거란 사실이 히스토리에 남지 않는다

<br />

이런걸 선호하지 않는다면,

feature-c 만들어서 커밋 하나 만들어보자

`git checkout -b feature-c`

`echo cc > c.txt`

`git add .`

`git commit -m 'c branch'`

`git checkout master`

`git seolyu`

여기서 그냥 `git merge` 하면 feature-c는 최신 마스터 브랜치에서 파상되었고 그 이후로 마스터 브랜치에는 다른 커밋이 없으므로 자동으로 fast-forward merge가 되어버린다

<br />

근데 난 fast-forward merge 가 싫다

히스토리에 무조건 남기고 싶다

`git merge --no-ff feature-c`  <- fast-forward merge 하지 말란 옵션 넣어서

commit 메세지 입력하라고 나온다

원하는거 작성하고(기본적으로 Merge branch 'feature-c' into master)

머지 완료되면

`git branch -d feature-c` 머지한 브랜치 삭제해준다

히스토리 보면 feature-c가 있었고 마스터 브랜치에 머지되었구나 확인 가능

<br />

[목차로](#목차)

<br />

---

<br />

### 머지_중요_컨셉

<br />

머지의 중요한 컨셉, three-way merge

<br />

fast-forward merges에서 히스토리 남길 원하거나(새로운 commit 만들기)

fast-forward가 불가능한 상황

feature A 브랜치가 마스터 브랜치에서 파생된 후 마스터 브랜치에 새로운 커밋이 생긴다면

fast-forward 불가능

<br />

만약 master의 포인터를 feature-A 브랜치의 최신 커밋으로 가리키게 된다면 

master는 그 커밋을 가리키고 해당 커밋은 그 전 커밋(feature-A 브랜치의)을 가리키고 

그 커밋은 feature-A가 파생될 당시 커밋을 가리키기에

마스터브랜치의 새로운 커밋 변경사항을 잃게됨

<br />

그래서 브랜치가 파생한 그 원래의 브랜치에서 새로운 커밋이 발생했다면 

fast-forward는 불가능

Three-way merge 이용해야함

<br />

즉, 베이스 branch인 마스터 브랜치와 파생된 feature-a 브랜치의 변동사항 모두 합해서 

merge commit을 만든 다음에 master branch에 commit을 해야한다

<br />

git merge 이용하면,

아무 옵션 없이 사용하면 fast-forward가 가능하면 merge commit 만들지 않고 fast-forward merge 진행

만약 fast-forward가 불가능한 상황이라면 commit 메세지 입력하도록 진행된다

<br />

`git seolyu`

`git merge feature-b` 하면(fast-forward 안되는 상황)

마스터 브랜치와 feature-b 브랜치 동시에 묶어주는 merge commit이 만들어진다

`git seolyu` 해보면

새로운 merge 커밋이 만들어진 것 확인

<br />

[목차로](#목차)

<br />

---

<br />

### Conflict_해결법

<br />

merge conflict 은 Git이 merge를 할 때 무언가 문제가 있어서 자동적으로 해결이 안된 무언가 충돌이 났을 때 발생

두 가지 브랜치에서 동일한 파일을 수정했다면 Git이 '도대체 어떤 내용을 추가해야 되지' '어떤 내용을 받아들여야 되지' 혼동스러울 떄 conflict 이 발생

직접 수정해줘야함

<br />

`git merge 브랜치명`

merge conflict 발생

<br />

`git status` 해보면

main.txt(머지 충돌 발생한 파일)에 동시에 두개가 수정되었다고 에러 확인

`cat main.txt` 해보면 알 수 없는 문자열 추가된 것 보이는데

Git 에서 머지 conflict 어디서 발생했는지 정보를 주기 위해 자동 삽입된 문자열

<br />

해결 위해 수동적으로 혹은 외부 merge 툴 이용

<br />

수동은

`open main.txt`  <- 윈도우는 start 명령어

열어서 수동으로

.. 중요한 포인트는 merge conflict 해결하는 것. 

이것만 하지 다른 것 변경사항 넣지 말자

<br />

`git merge --abort`  <- 머지 취소할 때 쓰면 됨

<br />

앞서 충돌난 파일 수정했으니까

`git status`  <- 이거 해보면 conflict 다 해결했으면 다 해결했다고 알려주기 위해 `git add` 이용해라고 나옴

<br />

`git add main.txt` 한 후

`git status` 해보면

모든 준비 되었으니 이제 merge 하자

`git merge --continue`

fast-forward merge가 아니라서 merge commit 만들어지고 타이틀 입력 후 파일 끄면 merge 완료

<br />

[목차로](#목차)

<br />

---

<br />

### VSCode로_Conflict_해결

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### P4Merge

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### Rebase

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### Rebase_tip

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### cherry_pick

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