<br />
<a href="https://github.com/seol-yu/TIL/tree/master/Git/Git_Master" target="_blank"><img src="https://github.com/seol-yu/TIL/blob/master/images/git-badge-logo.png?raw=true" height=30 /></a>
<br />

### 목차

[깃의 중요한 컨셉 이해](#Git_Concept)

[로컬 파일들 추가하기 add](#add)

[ignore](#ignore)

[현재 상태 확인 status](#status)

[파일 비교하기 diff](#diff)

[버전 등록하기](#commit)

[커밋할 때 팁](#commit_tip)

[소스트리](#소스트리)

[파일 변경시 유용한 팁](#rm_tip)

[버전들 목록 보기](#log)

[로그 예쁘게 만들기](#log_format)

[로그 심화](#로그_심화)

<br/>

---

<br/>

### Git_Concept

<br />

Git Workflow 3가지 작업환경

* working directory <- 프로젝트의 파일들을 수정 / 작업하고 있는

* staging area <- 어느정도 작업하다가 버전 히스토리에 저장할 준비가 되어있는 파일들을 옮겨놓는

* .git directory(.git repository) <- 버전의 히스토리를 가지고 있는(commit 으로 staging area에 있는 것들을 Git 버전 히스토리에 저장), checkout 명령어로 원하는 버전으로 다시 돌아갈 수 있다

<br />

이것들은 컴퓨터에만 보관되므로 내 컴퓨터에 문제가 생기면 히스토리 다 잃음

그래서 .git directory를 깃허브와 같은 서버에 push 명령어 이용해서 

서버에 깃 디렉토리 업로드

서버에서 로컬로 다운로드 받을 땐 pull 명령어

<br />

각각의 버전들에 어떤 정보가 들어있을까?

각각의 커밋에는 스냅샷된 정보들을 기반으로 해서 고유한 해쉬코드가 부과됨

이 아이들을 이용해 우리가 버전정보를 참조할 수 있다

이 커밋에는 아이디 뿐 아니라 어떤 버전인지 버전의 관련된 메세지와 

누가 작성했는지 날짜, 시간 정보도 포함

<br />

working directory 는 엄밀히 말하면 untracked과 tracked 두 가지로 나눌 수 있다

Git이 이미 알고 있는, Git이 트래킹하고 있는 파일은 tracked 카테고리로 

새로 만들어진 파일이거나 기존에 존재하던 프로젝트에서 Git을 초기화하게 되면 

Git이 파일에 대한 정보가 전혀 없는데

아직 트래킹 되지 않는 파일을 untracked

깃이 트래킹하고 있는 파일들 중에서도 지금 이 시점에서 수정이 되었는지 유무에 따라 unmodified / modified

<br />

unmodified는 이전 버전과 비교해서 수정되지 않았기 때문에 

오직 수정된 modified 파일만 Staging area로 옮겨갈 수 있다

<br />

[목차로](#목차)

<br />

---

<br />

### add

<br />

`echo hello world! > a.txt`

`echo hello world! > b.txt`

`echo hello world! > c.txt`

`open .` <- 윈도우는 start. 폴더 열기

`ls`

<br />

`git status` <- 현재 파일 상태 확인

GIT이 트래킹하게 하려면 Staging area에 옮기려면 `git add` 명령어

`git add a.txt`

이렇게 한 후

`git status` 해보면 커밋할 준비가 되어있는 변경사항 확인 가능

add 명령어 이용하면 이 파일은 준비가 되었다, Staging area로 옮겨야지

`git add *.txt` <- 존재하는 txt 파일 모두 add

<br />

`echo seolyu >> a.txt`

이렇게 하고 `git status` 해보면

a.txt 수정된 것 확인

<br />

Staging area에 있는 파일은 `git add` 명령어 이용해서 추가할 당시 그 상태의 파일들이 저장되어져 있다

staging 된 이후 수정하면 unstaged files 에 나오게 된다

Git이 트래킹하고 있기 때문에 modified 라고 나온다

`git add a.txt`

`git status`

해보면 

Staging area에 옮겨진 것 확인

<br />

`git rm --cached` 이용해서 다시 Staging area에서 working directory 로 옮겨갈 수 있다

`git rm --cached *`

하고 `git status` 해보면

파일들 Untracked 된 것 확인

<br />

`git add *` <- 디렉토리에 있는 모든 파일들 staging area로 옮겨감

만약 여기서 a 파일 삭제되었다면 `rm a.txt`

`ls` <- working directory 에는 a 파일이 없는 것을 볼 수 있다

이 상태에서 

`git add *`

`git status` 해보면

삭제된 a 파일은 디렉토리에 없었기 때문에 git staging area에 추가되지 않은 것을 확인

이럴 경우

`git add .` 쓰면 모든 파일들을 포함해서 git staging area에 추가된 것을 확인할 수 있다

<br />

[목차로](#목차)

<br />

---

<br />

### ignore

<br />

프로젝트 안에서 다양한 형태의 파일들이 있다면

`echo styling > style.css`

`echo log > log.log`

`ls`

`git status`

<br />

`git add *.css` <- css 파일만 추가

`git status`

<br />

프로젝트 하다가 부수적으로 생겨난 파일들, 트래킹하고 싶지 않은 애들, 깃/깃허브에 올리고 싶지 않은 애들은

.gitignore

`echo *.log > .gitignore`

<br />

`ls -al`

.git <- 깃 관련 모든 정보를 가지고 있는 숨겨진 .git 폴더

.gitignore <- 추가하고 싶지 않은 애들

<br />

`open .gitignore` <- 윈도우는 open 대신 start

`git status` <- 해보면 더 이상 log파일(깃이그노어)은 보이지 않는 것 확인

모든 log 추가하고 싶지 않으면 *.log

특정 디렉토리 추가하고 싶지 않으면 build/

build 안에 있는 log들만 트래킹하고 싶지 않다면

build/.log <- build/*.log

<br />

[목차로](#목차)

<br />

---

<br />

### status

<br />

`git status` <- 작업하고 있는 모든 내용들 간단히 확인

`-h` 옵션(help)으로 더 자세히, 함께 실행할 수 있는 모든 옵션들에 대해 확인 가능

<br />

옵션 없이 `git status` 라고 작성하면 기본적으로 `--long` 이라는 옵션이 적용되어진다

`-s` 붙이면 조금 더 간단하게 확인 가능

`-b` 라고 붙이면 branch에 관련된 정보들을 확인 가능

<br />

터미널에서 윈도우라면 컨트롤, Mac 이라면 커맨드를 누른 상태에서 K를 타이핑하면 터미널이 깨끗하게 지워진다(안되는데)

이 상태에서 `git status -s` 하면 short 간단한 버전으로 확인 가능

알 수 없는 알파벳

초록색은 staging area에 추가된 정보들을 볼 수 있다

A 는 파일이 추가가 되었고 staging area에 들어가 있는 것을 확인할 수 있다

.gitignore 는 아직 트래킹되지 않는 working directory 에만 있는 것을 볼 수가 있다

<br />

만약 `echo` 명령어로 파일 수정하고 다시 확인해보면 AM 이라고 뜨는 것을 볼 수 있다

Staging area에 추가되었고 working directory 에는 M modified 수정 되었다 정보 확인 가능

<br />

[목차로](#목차)

<br />

---

<br />

### diff

<br />

`git status` 를 이용해서 어떤 파일이 수정되었고 staging area에 있는지 확인 가능하지만

정확히 어떤 내용이 수정되었는지 확인 불가

정확히 어떤 파일의 내용이 수정되었는지 확인해보려면 `git diff` 이용

아무 옵션 없으면 working directory에 있는 것만 비교해서 볼 수가 있다

<br />

--git 커맨드를 이용해서 

a는 이전 버전(working directory에 있는 파일이라면 이전에 commit된 버전을 가리키거나 staging area에 변경된 내용이 있다면 그것이 이전 버전일 수도 있다)을 의미

지금 버전인 b와 비교

index는 Git 내부적으로 파일들을 참고할 때 쓰는 것

마이너스는 이전 파일

새로 변경된 사항은 플러스

그 밑에 마이너스는 이전파일, +1,2는 첫번째 줄에서 두번째 줄까지 확인 의미

추가되면 초록색 삭제는 마이너스 빨간색으로 표시

<br />

키보드 q 눌러서 종료하고 

`git diff` 이용하게 되면 working directory에 있는 변경사항들만 확인해 볼 수 있다

`cat 파일` 해보면 내용 확인

staging area에 있는 것 확인하려면 `git diff --staged`

<br />

`git diff -h`  <- 옵션 확인

스테이지는 캐시란 말과 동의어로 사용되곤 함

`git diff --cached`

<br />

`git config --global -e`

한 후

```
[diff]
	tool = vscode
[difftool "vscode"]
	cmd = code --wait --diff $LOCAL $REMOTE
```

diff 툴은 vscode 이용하고

vscode의 명령어는 code 다음에 터미널에서 기다리고 diff를 이용하고 LOCAL과 REMOTE를 비교한다

`git difftool`

Y

`git difftool --staged`

Y

<br />

[목차로](#목차)

<br />

---

<br />

### commit

<br />

파일 수정,변경하고 마음에 들면 staging area에 올리고

첫번째 커밋(버전) 만들어보자

<br />

`git commit` <- staging area에 있는 변경사항을 Git repository에 옮겨주는 역할

아무 옵션없이 하면 기본적인 템플릿 나옴

보통은 commit에 있는 타이틀을 작성하고

그 다음에 조금 더 자세한 디스크립션(상세설명) 적음

저장하고 다시 파일 닫아보면

첫번 쨰 줄 보면 master 브랜치에 해시코드 제일 앞 부분만 따서 나와있는데 해시코드 아이디와 타이틀이 표기가 되고

히스토리를 확인하기 위해서 `git log` 를 이용해보면

commit과 전체적인 해시코드 나옴

누가 언제 했는지, 타이틀과 디스크립션

<br />

`echo add >> 텍스트파일`

add 했었던 텍스트파일에 add 라는 문구 추가하고(수정)

`git status -s` 해보면 M 뜨는거 확인

`git add .`

`git commit -m "second commit"` 메세지 옵션으로 간단히 커밋

`git log` <- 커밋 확인

<br />

이렇게 수정하고 수정된 파일을 staging area로 옮긴 다음에 커밋해야 하는데

나는 내 working directory에 있는 모든 변경 사항이 마음에 들어

그럼 add 굳이 사용하지 않고도

`git commit -am "third commit"`

이렇게 am 옵션 써서(`git status` 해봐)

<br />

[목차로](#목차)

<br />

---

<br />

### commit_tip

<br />

commit 해나가는 이 .git directory 깃 레포지토리에는 어떤 규모의 커밋을 해나가면 좋을까

.git directory에 있는 커밋들은 사실 히스토리의 창고

작업대를 버전별로 나눠서 관리할 수 있는 유용한 창고같은 애

때문에 이 히스토리에 전체적인 어플리케이션을 만들어서 하나의 커밋으로 저장하게 되면 아무 의미 X

이 히스토리에는 어플 만든다면 이 어플리케이션을 조금 더 세분화해서 기능별로 작은 단위로 만들어 나가는 것이 중요

작은 단위로 나눠서 히스토리에 저장하는 것이 좋다

의미있는 이름 지정해서 저장

예를 들어 프로젝트 초기화하는 커밋 하나, 로그인 서비스 모듈을 하나 만들어서 다시 커밋, 

그리고 그 다음에 UserRepository 모듈 만들었다면 그것도 커밋, 그 다음 웰컴 페이지 커밋, 어바웃 페이지 커밋 이런식으로 작은 단위로 의미 있는 이름을 지정해서 히스토리를 봤을 때 작업 내용 빠르게 확인 가능

<br />

원하는 변경사항을 빠르게 찾아서 자세히 확인해 볼 수도 있고 원하지 않는 커밋을 취소하기가 편하다

보통 commit의 메세지는 현재형으로 동사로 만들어진다

init, add, fix 이런 애들

<br />

커밋할 때 주의사항!

커밋할 때 내가 크래쉬 고쳤다고 하면 그 고친 내용만 포함한 커밋 만들어야지 다른 버그 고치고 리팩토링도 하고 새로운 기능도 넣고 이런식으로 한 후 커밋하게 되면 코드 리뷰할 때도 혼동이 오고 히스토리를 바라 볼 때도 너무 혼동

커밋 메시지에 맞게 해당하는 그 내용만 포함해서 커밋하는 것이 정말 중요

커밋은 너무 커도 문제가 되지만 또 너무 작은 단위로 해 나가도 좋지가 않다

어느 정도 의미있는 단위로 나누는 것은 실제로 프로젝트를 하면서 커밋을 해나가면서 조금씩 감을 쌓을 수 있다

<br />

[목차로](#목차)

<br />

---

<br />

### 소스트리

<br />

세부적으로 할 땐 UI 툴 소스트리 활용

<br />

[목차로](#목차)

<br />

---

<br />

### rm_tip

<br />

파일 변경시 유용한 팁

파일을 `rm` 을 이용해서 텍스트 파일을 삭제하면 

파일이 삭제된 내용은 아직 staging area에 포함이 되지 않기 때문에 

이것을 commit 하기 위해서는 `git add` 를 이용해서 추가해 준 다음 `commit` 해야함

<br />

하지만 Git에서 제공하는 `rm` 명령어를 이용하면 간편하게 바로 staging area에 추가됨

`git rm 삭제할파일`

<br />

즉, 그냥 삭제를 한 경우에는 staging area에 자동으로 포함되지 않지만

git 에서 제공하는 `rm` 이용하면 자동으로 staging area에 포함

<br />

마찬가지로

그냥 파일의 이름 변경하면 git status에 포함 안된다

but

`git mv style.css f.css` 이런식으로 하면

`git status` 해보면

이름이 변경된 것이 staging area에 포함된 것 확인

<br />

[목차로](#목차)

<br />

---

<br />

### log

<br />

git 버전 히스토리를 간편하게 볼 수 있는 명령어 & 유용한 옵션 & 유용 툴

<br />

`git log` 

위에 있을수록 최신의 log

방향키 이용해서 아래로 내려가면 내려갈수록 오래된 커밋

<br />

아무 옵션없이 log 쓰면 커밋 아이디, 누가 만들었는지, 시간 타이틀 확인 가능

q 이용해서 나가고

<br />

`git log -p` 패치 옵션 쓰면 수정된 파일 내용도 쓸 수 있다 diff 쓴 것 처럼

<br />

간편하게 보고 싶다면

`git log --oneline`

간편하게 해시코드 앞자리 문자열과 간단한 커밋 메세지 확인 가능

<br />

여기에 HEAD 라는 것은,

Git 에서 커밋을 하나씩 해나가면

뒤에 커밋은 이전 커밋을 참고하게 된다

포인터가 생성

이렇게 커밋을 해나가는 줄기 기본 줄기가 master branch 다

이제 막 D를 커밋했다면 헤드는 d를 가리키게 된다

헤드라는 것은 지금 내가 있는, 바라보는 이 시점에 버전을 가리키는데

<br />

헤드에서 물결 모양을 쓴 다음 1을 붙이게 되면

지금 있는 현재 헤드의 이전 버전을 가리키게 된다

<br />

head에 2를 붙이게 되면

헤드에 있는 곳에서 두번째 부모를 찾아가는 것과 동일

<br />

이렇게 만들어진 커밋들은 언제든지, 내가 원할 때 원하는 시점으로 돌아갈 수 있는데

만약 commit b 로 돌아가고 싶다면

git checkout b 를 이용해서 돌아갈 수 있다

이렇게 돌아가게 되면 헤드는 이제 b를 가리킴

헤드는 지금 내가 현재 보고 있는 그 커밋을 가리킨다

<br />

각각의 커밋의 해시코드를 이용해서 원하는 시점으로 돌아갈 수 있다

이 해시코드를 복사한 다음에 Q 를 눌러서 

명령어 창으로

git checkout 명령어 다음에 원하는 해시코드를 입력하게 되면 그 때로 돌아가게 된다

그래서 스위칭 투 여기 이 버전으로 지금 스위치가 이루어졌다 라고 나와있는데

다시 git log 해보면

헤드가 원하는 시점 가리키고 있는 것 확인

<br />

다시 `git checkout master`

`git log` 하면 원래 상황으로

<br />

`git log --oneline --reverse`

 오래된 커밋부터 볼 수 있다

<br />

[목차로](#목차)

<br />

---

<br />

### log_format

<br />

git log 를 볼 때 더 이쁘게 우리가 원하는 정보 가질 수 있도록 포맷팅

`git log --pretty` <- --pretty 옵션을 이용해 원하는 대로 꾸밀 수 있다

<br />

`git log --pretty=oneline`

`git log --pretty=format:"%h %an"`

`git log --pretty=format:"%h %an %ar %s`

<br />

https://git-scm.com/docs/git-log

레퍼런스 - log 아래가보면 확인

<br />

`git checkout fix` <- fix 라는 브랜치로 이동

HEAD는 fix를 가리키고 있는데 어디서부터 어떤 커밋이 fix에 해당하는지 확인이 힘들다

이 때

`git log --oneline --graph --all`

<br />

`git log --graph --all --pretty=format:'%C(yellow)[%ad]%C(reset) %C(green)[%h]%C(reset) | %C(white)%s %C(bold red){{%an}}%C(reset) %C(blue)%d%C(reset)' --date=short`

<br />

원하는 방식으로 포맷을 지정할 수 있다

이렇게 긴 명령어.. alias 로

<br />

`git config --global alias.seolyu "log --graph --all --pretty=format:'%C(yellow)[%ad]%C(reset) %C(green)[%h]%C(reset) | %C(white)%s %C(bold red){{%an}}%C(reset) %C(blue)%d%C(reset)' --date=short"`

<br />

[목차로](#목차)

<br />

---

<br />

### 로그_심화

<br />

`git log`

잘 활용해야 버전 히스토리 빠르게 검사하고 원하는 내용을 빠르게 찾아낼 수 있다

<br />

`git log -3` <- 최근 커밋 중 3개만 보겠다

`git log --oneline -3`

`git log --author="seolyu"`

`git log --before="2020-09-08"` <- 9월 8일 이전 커밋

`git log --grep="project"` <- 커밋 중 project 포함된

`git log -S "about"` <- 소스코드 컨텐츠 안에서 문자를 검색.. 변경사항 문자열.

`git log -S "about" -p`  <- 더 자세히 내용 알고 싶다면 패치 옵션

<br />

해당하는 파일별로 log를 볼 수 있는데

`git log about.txt`

about 파일에 해당하는 commit 을 볼 수가 있다

`git log -p about.txt`

더 자세한 내용

간단한 내용만 보려면

`git log -s about.txt`

<br />

`git log HEAD`  <- git log만 했을 때와 동일

헤드에서 앞에 있는 부모부터 log 보여주고 싶다면

`git log HEAD~1`

헤드에서 두번째 떨어진 부모부터 보고 싶다면

`git log HEAD~2`

<br />

해시코드 이용해서 .. 대략적으로만 복사해서

`git show 해당하는해시코드`  <- 커밋 내용 정확하게 볼 수 있다

`git show 해당하는해시코드:파일이름`  <- 그 파일에 해당하는 내용만

<br />

두가지 코드 비교해보고 싶다면 각각 해시코드 저장해서

`git diff 해시코드1 해시코드2`

`git diff 해시코드1 해시코드2 파일이름.확장자`  <- 해당하는 파일 선택

<br />

[목차로](#목차)

<br />

---



