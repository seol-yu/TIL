<br />
<a href="https://github.com/seol-yu/TIL/tree/master/Git/Git_Master" target="_blank"><img src="https://github.com/seol-yu/TIL/blob/master/images/git-badge-logo.png?raw=true" height=30 /></a>
<br />

### 목차

[깃의 중요한 컨셉 이해](#Git_Concept)

[로컬 파일들 추가하기 add](#add)

[ignore](#ignore)

[현재 상태 확인 status](#status)

[파일 비교하기 diff](#diff)

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

