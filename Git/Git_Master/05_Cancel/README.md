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

만약 커밋을 하지 않았는데 내가 local에 작성한 것을 실수로 git reset hard를 했다면

유용한 extension

intelliJ 에는 기본적으로 local history가 포함되어져 있다

그래서 로컬에서 작업하고 있는 파일들을 시간별로, 분별로 히스토리가 자동 저장

실수로 파일을 지우거나 잘못해서 reset 하는 경우 언제든 local history 이용해서 예전 버전으로 돌아갈 수 있다

<br />

VSCode에도 local history라는 extension이 있다

이것을 설치하게 되면

local history를 이용해 언제든지 몇 분 전에 작업한 내용들로 돌아갈 수 있다

git reset hard를 이용해 실수로 파일 내용 지워버렸을 때 언제든지 예전으로 돌아갈 수 있다

<br />

[목차로](#목차)

<br />

---

<br />

### 취소사항_버전으로

<br />

reset 이나 restore 명령어는 언제든지 예전 버전으로 돌아갈 수 있지만

히스토리에 예전으로 돌아갔다는게 남지 않는다

마스터 브랜치에 머지한 후 제품 릴리즈 되었어도 뒤늦게 기능에 문제, 심각한 이슈 도입시 해당 커밋을 완전히 제거해야 하는 경우도 있는데

문제가 되는 커밋을 revert 취소할 수가 있다

`git revert 해시코드`

<br />

revert commit은 해당하는 커밋 변경사항을 다시 없애주는, 삭제해주는, 취소해주는 다시 예전으로 돌려주는 그런 커밋을 만들게 된다

<br />

이미 server master branch에 커밋된 애들은 reset, rebase 보다는 revert를 사용하는 것이 맞다

<br />

revert는 새로운 커밋을 만들어서 이미 추가된 내용을 변경하는 것이므로 

즉, history를 수정하지 않기 때문에 언제든지 자유롭게 이용할 수 있다

<br />

revert도 따로 히스토리 만들지 않고도 가능한데

`git revert --no-commit 해시코드`  <- 기존 커밋과 충돌, 매뉴얼적으로 수정해줘야하는 경우

바로 커밋을 하지 않고 취소되는 변경 사항을 staging area에 추가해줌

보통은 revert를 하게되면 정말 revert하는 그 내용만 작성해서 commit을 해야되기 때문에 자동으로 생성되는 걸 하는게 맞고 revert commit에서 다른 기능을 추가하거나 버그를 고치거나 하지말자

<br />

[목차로](#목차)

<br />

---

<br />

### 이전_커밋_수정

<br />

interactive rebasing을 이용해 기존 history를 소리소문없이 간편하게 변경하자

당연히 서버에 업로드된 경우라면 피하는 것이 좋고

혼자 작업하는 경우

내가 commit된 history를 변경해야한다면 추천

<br />

git commit amend 옵션을 이용해서 최신 commit 타이틀 변경하거나 수정 사항 업데이트 했는데

만약 최신이 아니라 더 이전 업데이트 하고 싶다면

interactive rebasing 이용

<br />

주의점은 rebasing 하는 순간

그거 하나만 수정하더라도 뒤 모든 포인터들이 업데이트 되어야해서

전부 새로운 아이템이 되는 꼴

<br />

바꾸고자 하는 커밋이 가리킨 이전 해시코드부터 시작해야한다

`git rebase -i 이전해시코드`

<br />

pick <- 이거 괜찮으니까 이거써

reword <- 괜찮지만 메시지 변경하겠다

edit <- 커밋을 쓰긴 쓸건데 안에 변경 사항 바꾸겠다

squash <- 이전에 merge할 때 하나로 묶어주는 것처럼 그렇게 묶어주는, 여러가지의 커밋을 하나로 묶어주는 애들

fixup <- squash와 비슷하지만 메시지를 남기지 않는 것

exec <- execute의 약자. commit부터 shell 명령어를 직접적으로 이용하고 싶을 때

break <- stop here

drop <- 해당하는 commit을 제거할 때 필요하지 않을 때 history를 남기고 싶지 않을 때

<br />

커밋을 이용하지만 메세지를 변경하는 경우 reword 쓰면 된다

<br />

pick 대신 r 쓰고 저장하고 끄면

커밋 메세지 수정창 나온다

원하는 메세지 쓰고 저장 종료하면

<br />

rebase 끝나있다

<br />

[목차로](#목차)

<br />

---

<br />

### 커밋_삭제

<br />

필요없는 커밋 삭제하기

rebase를 하고자 하는 그 이전 커밋의 해시코드, 혹은 HEAD 물결 이용해서

`git rebase -i HEAD~2`  <- 이런식

커밋을 완전히 history에서 삭제하는 것

drop 쓴다

pick 대신 d 쓰고 저장 종료

<br />

rebase할 때 충돌나면(해당 파일을 뒤에 이어지는 commit에서 수정하는 등)

수동적으로 관리 해줘야함

이어지는 커밋에서 삭제된 파일 수정사항 발생해서 충돌나면

`git status`  <- 확인해보자

`git add .`

`git status`  <- 새로운 파일 생김

`git rebase --continue`

변경사항 생겨서 커밋 메시지 수정 기회 생김

저장 종료

<br />

[목차로](#목차)

<br />

---

<br />

### 커밋_분할

<br />

아직 서버에 올리지 않은 커밋 나눠보기(파일 두개 수정했던 커밋)

<br />

보통 프로젝트에 필요한 라이브러리 추가한다면 

어떤 dependency가 추가된다면 

새로 추가되는 dependency를 하나의 커밋으로 하는 것이 바람직

나중에 그 dependency 제거하거나 해당 버전 알맞지 않으면 그 부분만 revert

commit 하나에는 한가지만

라이브러리 하나 추가

기능 하나 추가

버그를 하나 수정

두가지 버그 같이 수정하거나 두가지 dependency 추가하지말고 한가지! 

히스토리 관리 쉽고 문제 발견에도, revert에도 쉽다

<br />

그 이전 해시코드 

`git rebase -i 이전해시코드`

해당 커밋 pick대신 e 쓰고 저장 종료

HEAD가 수정하고자 하는 곳에 머물러있다

<br />

일단 커밋을 working directory로 가져와야한다

`git reset --mixed HEAD~1`  <- --mixed는 생략 가능, 헤드 이전으로 포인터 돌리기

이렇게 해보면,

두 가지 파일 수정된게 나의 working directory로 온 것 확인

<br />

일단 파일1을 staging area로 옮기자

`git add 파일1`

이렇게하면 파일1만 커밋할 수 있다

커밋 하고

이제 파일2도 add, commit

변경사항 마음에 들면

`git rebase --continue`

<br />

[목차로](#목차)

<br />

---

<br />

### 커밋_합치기

<br />

history도 squash 해보자

<br />

`git rebase -i 이전해시코드`

커밋을 하나로 묶어주는 명령어는 squash

제일 처음에 나오는 애는 pick을 해주고

그 뒤에 나오는 애들을 s로 변경

이렇게 하면 

s 쓴 애들은 squash가 되면서 그 이전에 있는 커밋 즉 처음 나온 커밋과 합쳐짐

<br />

저장 종료하면

커밋 메세지 작성창 나옴

합쳐줄 커밋들이 나옴

전부 합쳐줄꺼니까 다 지우고 커밋 메세지 쓰고

저장 종료하면 rebase 끝남

<br />

깔끔하게 커밋하나로 되어있고

뒤에 이어지는 해시코드 변경된 것도 확인(새로운 커밋이 됨)

그니까 서버에 업로드/push 된 히스토리는 rebase하는거 위험하다

물론 혼자 작업하는 것은 수정 가능

<br />

[목차로](#목차)

<br />

---

<br />

### 소스트리_활용

<br />

위와 마찬가지로

소스트리에서도 rebase는 그 이전을 가리켜야함 

그 이전 커밋 우클해서 Rebase children of .... interactively ...

<br />

[목차로](#목차)

<br />