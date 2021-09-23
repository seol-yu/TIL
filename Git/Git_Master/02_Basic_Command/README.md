<br />
<a href="https://github.com/seol-yu/TIL/tree/master/Git/Git_Master" target="_blank"><img src="https://github.com/seol-yu/TIL/blob/master/images/git-badge-logo.png?raw=true" height=30 /></a>
<br />

### 목차

[깃의 중요한 컨셉 이해](#Git_Concept)

[로컬 파일들 추가하기 add](#add)


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



<br />

[목차로](#목차)

<br />

---

