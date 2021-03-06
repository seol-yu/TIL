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

VSCode 이용해서 간편하게 Merge Conflict 해결할 수 있는 방법

diff 툴과 마찬가지로 `git config` 에 있는 글로벌 세팅값을 edit 모드로 열어보면

`git config --global -e`

```
[merge]
	tool = vscode
[mergetool "vscode"]
	cmd = code --wait $MERGED
```

4줄 추가

<br />

`git merge 브랜치명` 했을 때 conflict 발생했을 때

`git mergetool` 

VSCode 열림

버튼 이용해서 간단히 해결

1. Accept Current Change  <- 현재 있는 브랜치 내용 받아들이자
2. Accept Incoming Change  <- 머지하고자 하는 브랜치 내용 받아들이자
3. Accept Both Changes  <- 둘다
4. Compare Changes  <- 정확하게 어떤게 다른지 확인 / Current 왼쪽 Incoming 오른쪽

저장하고 파일 끄면 머지 완료

<br />

`git status` 해보면 충돌났었던 파일은 해결되어서 자동적으로 커밋할 준비 되었다고 나옴

main.txt.orig 이런 파일이 생기는데 merge conflict 내용 포함된 내용

이런 파일 생기는거 번거로우면

`git config --global mergetool.keepBackup false`

<br />

머지를 취소해보자

`git merge --abort`

그래도

`git status` 해보면 그래도 main.txt.orig 남아있는데

`git clean -fd`

다시 

`git merge 브랜치명`

`git mergetool` 한 후..

`git status` 했을 때 오리진 파일 생성 안되는 것 확인

`git merge --continue`

커밋 메시지 저장하고 종료하면 끝

<br />

[목차로](#목차)

<br />

---

<br />

### P4Merge

<br />

많은 개발자들이 쓰는 막강한 머지툴

p4merge 다운 받고

`git merge 브랜치명`

충돌나면

`git config --global -e`  <- 지금 VSCode로 설정되어있으니까 새로운 머지툴 추가하자

```
[merge]
	tool = p4merge
[mergetool "vscode"]
	cmd = code --wait $MERGED
[mergetool]
	keepBackup = false
[mergetool "p4merge"]
	path = "/Applications/p4merge.app/Contents/MacOS/p4merge"
```

윈도우 사용자면 C:/ProgramFiles 안에 찾아서 경로 지정

`git mergetool`

<br />

오른쪽 초록색은 로컬, 대체로 지금 작업하고 있는 브랜치

왼쪽에는 리모트, 내 작업환경이 아닌 merge하고자 하는 브랜치

가운데는 두 가지 변경사항 없는 베이스 내용

<br />

밑에 파란색은 리모트 변경

초록색은 로컬 유지

두개 다 유지하렬면 shift 누르면서 클릭하면 둘 다 선택됨

저장 후 나가면 터미널에서 여전히 명령어 수행 중인 것 볼 수 있다

터미널 명령어 종료 Ctrl + C

<br />

`git status`

`git merge --continue`

커밋 메시지 저장 후 종료하면 머지 완료

<br />

[목차로](#목차)

<br />

---

<br />

### Rebase

<br />

three-way merge에서 커밋 히스토리 더럽게 안남기는 방법 fast-forward 할 수 있는 방법은 rebase

<br />

featureA 브랜치가 파생된 시점 즉 

feature A의 첫번째 커밋이 가리키고 있는 마스터 브랜치의 커밋이 

featureA 브랜치가 파생된 커밋인데

featureA의 첫번째 커밋이 마스터브랜치의 최신 커밋을 가리키게 변경하면

fast-forward 가능

<br />:warning:혼자하면 괜찮은데 다른 개발자와 함께 featureA에서 작업하고 있었다면 조금 위험

그 이유는

rebase를 하게 되면 

featureA 브랜치의 첫번째 커밋이 가리키고 있는 포인터를 변경하는건데 

이렇게 포인터 정보를 변경하게 되면 기존 커밋을 유지하는 것이 아니라

featureA 브랜치에서 새로운 커밋을 만들게 된다

겉으로는 같아 보여도

실제로 featureA의 커밋들은 다른 커밋들

<br />

만약 다른 개발자가 동일한 브랜치에서 작업하고 있었다면 

내가 rebase를 하고 push를 해서 서버에 변경된 정보를 업데이트하게 된다면 

다른 개발자가 가지고 있는 feature A의 커밋들은 전혀 다른 커밋이기에 

나중에 머지충돌 발생할 수 있다

그러므로

rebase는 유용하나 다른 개발자와 함께 브랜치 위에서 작업 중이고

이미 히스토리가 서버에 업로드되어 있는 경우라면

업로드된 히스토리는 절대 rebase하면 안됨

서버에 업데이트되지 않은 나의 로컬에 있는 커밋에 한에서는 rebase 자유

<br />

fast-forward 하려면 merge commit을 만들고 싶지 않다면,

feature-b(머지할) 브랜치를 최신 master branch에 rebase 해놓으면 간단히 fast-forward 가능

먼서 feature-b 브랜치로 이동한 후

`git checkout feature-b`

현재 브랜치인 feature-b를 마스터 브랜치에 rebase

`git rebase master`

<br />

feature-b 브랜치는 최신 master branch에서 계속 파생되어져 온 것 확인

이 상태에서 다시 마스터 브랜치 가서 `git merge` 이용해 feature-b 브랜치를 fast-forward 할 수 있다

`git checkout master`

`git merge feature-b`

<br />

머지된 모든 브랜치 삭제해주면

`git branch -d 삭제할브랜치명`

깔끔하게 마스터 브랜치에 모든 커밋이 있다

<br />

[목차로](#목차)

<br />

---

<br />

### Rebase_tip

<br />

rebase --onto 옵션

<br />

브랜치에서 또 브랜치 만드는 등의 상황에서 

브랜치 상의 브랜치만을 마스터 브랜치에 머지하고 싶다면

그 브랜치가 마스터 브랜치를 가리키고 있으면 편리

<br />

그래서 `git rebase --onto` 옵션을 써서 마스터 브랜치에 rebase를 할건데 

브랜치에서 파생된 브랜치만 마스터 브랜치에 rebase할거야

`git rebase --onto master 브랜치 파생된브랜치`

<br />

rebase를 하고나면

커밋이 비슷해보이지만

실제로는 새로 만들어진 새로운 커밋이 생성되는 걸 확인 가능

<br />

이것도 rebase와 마찬가지로

다른 개발자와 함께 일하고 있는 브랜치이고

서버에 이미 히스토리가 올라가 있다면

즉 브랜치의 파생된 브랜치의 커밋들이 이미 서버에 올라가 있는 상황이라면

rebase를 쓸 때는 조금 조심

<br />

`git rebase --onto master 브랜치 파생된브랜치`  <- 브랜치의 파생된 브랜치가 마스터 브랜치에서 파생되도록 rebase 한 후,

`git checkout master`  <- master 브랜치 가서

`git merge 파생된브랜치`

이렇게 하면 fast-forward 머지됨

<br />

[목차로](#목차)

<br />

---

<br />

### cherry_pick

<br />

cherry pick 개발시 너무 유용

특정 커밋만 마스터 브랜치에 필요하다면

체리픽 유용

cherry pick은 내가 원하는 다른 브랜치에 있더라도 원하는 커밋만 가져올 수 있다

<br />

원하는 커밋 해시코드를 복사해서

가지고 오고자 하는 브랜치에서 `git cherry-pick` 명령어 사용

`git cherry-pick f2b9178`

브랜치에서 굉장히 작업 기간이 오래 걸리거나 또는 특정 커밋 가지고 오고 싶을 때 유용

<br />

[목차로](#목차)

<br />

---

<br />

### 소스트리_활용

<br />

실습해보기

<br />

[목차로](#목차)

<br />