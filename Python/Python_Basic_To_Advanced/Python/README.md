<br />

 <a href="https://github.com/seol-yu/TIL/tree/master/Python/Python_Basic_To_Advanced" target="_blank"><img src="https://github.com/seol-yu/TIL/blob/master/images/python-badge-logo.png?raw=true" height=30 /></a>

<br />

### 목차

[환경셋팅](#환경셋팅)

[개발 환경 설정](#개발_환경_설정)

[Print 함수](#Print)

[코딩해보기](#코딩해보기)

[가상환경 설정 및 패키지 설치](#가상환경_설정_패키지_설치)

[자료형 - 데이터타입, 숫자형, 연산자](#자료형1)

[자료형 - 문자열 및 연산자](#자료형2)

[자료형 - 리스트와 튜플](#자료형3)

[자료형 - 딕셔너리와 집합](#자료형4)

[자료형 - 데이터 타입](#자료형5)

[흐름 제어 - 조건문](#조건문)

[흐름 제어 - 반복문](#반복문)

[함수 - 함수와 람다](#함수_람다)

[클래스 - self, 클래스 변수, 인스턴스 변수](#클래스1)

[클래스 - 상속, 다중상속](#클래스2)

[모듈, 패키지](#모듈_패키지)

[파일 - 파일 읽기 및 쓰기](#파일)

[예외 - 에러 및 예외처리](#에러_예외_처리)

[외부 파일 - Excel, CSV 읽기 쓰기](#외부 파일)

[DB - SQLite 연동, 테이블 생성, 데이터 삽입](#DB1)

[DB - 테이블 조회, 조건 조회](#DB2)

[DB - 테이블 수정, 삭제](#DB3)

[프로젝트 - 타이핑 게임 제작](#타이핑_게임)

[코딩 알고리즘 환경 세팅](#알고리즘_셋팅)

<br />

---

<br />

### 환경셋팅

<br />

https://www.python.org/downloads/

Downloads - All releases

Windows가서 64버전 다운로드

(Windows x86-64 executable installer)

Add Python 3.9 to Path 클릭 - Install now(설치 후 재부팅 필요)

명령 프롬프트에서 `python` 해보면 뭔가 나옴

나올 땐 `exit()`

<br />

code.visualstudio.com 가서 Download for Windows 클릭해서 다운받기

2. code로 열기 작업을 Windows 탐색기 파일의 상황에 맞는 메뉴에 추가

3. code로 열기 작업을 Windows 탐색기 디렉터리의 상황에 맞는 메뉴에 추가

추가로 체크

명령 프롬프트에서 `code` 엔터해보면 VSCode 실행됨

<br />

VSCode 익스텐션 python 설치(설치 후 VSCode 껐다 켜기)

<br />

main.py 만들기

왼쪽 아래에 보면 어떤 Python Interpreter 사용할지 설정 가능

Ctrl + Shift + P => Python:Select Interpreter

<br />

print('hello world')

Run - Run without Debugging

<br />

<br />

가상환경 설치해보자

window - cmd

작업 중인 파일(폴더) 상위 폴더에서

cf ) `dir`  디렉토리 목록

`python -m venv python_basic(폴더명)`

들어가보면 `cd python_basic`

include, Lib, Scripts 폴더 생성됨

`cd Scripts`

`activate.bat`

이렇게 하면

(python_basic) 이렇게 되는데

python_basic 가상환경 안에서 동작한다는 뜻

`pip install simplejson`

이 가상환경에서 설치된 것

`pip list`

WARNING 없애려면

`python -m pip install --upgrade pip`

가상환경 설치 끝

<br />

main.py 에서

`import simplejson as json` 써보면 노란줄 뜨는데(난 안뜨지만)

왼쪽 밑에 interpreter 선택하는거 버튼 누르고

Enter interpreter path.. 눌러서

Find..

Scripts 안에 있는 python.exe 선택(혼자 검은색인거)

<br />

Ctrl + Shift + P 키 누르고

build 입력하면

Tasks: Configure Default Build Task

Create tasks.json file from template

아무거나 클릭클릭 Others 클릭

하면 tasks.json 나오는데

```json
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Project Label",
            "type": "shell",
            "command": "python",
            "args": [
                "${file}"
            ],
            "presentation": {
                "reveal": "always",
                "panel": "new"
            },
            "options": {
                "env": {
                    "PYTHONIOENCODING": "UTF-8"
                }
            },
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
```

위 코드로 하고 저장

<br />

tasks.json은 .vscode 폴더(이게 python_basic 폴더 안에 있어야하는 것 같아서(밖에 생겨버림) 안에 넣음) 내부에 들어오게 됨..

다음 강의 들어보니까 안에 넣는 것이 아닌 것 같고 task.json에 "command": "python", 으로 하니까 실행됨

settings.json

```json
{
    "python.pythonPath": "Scripts\\python.exe"
}
```

<br />

"Scripts\\python.exe" <- 이 부분을 tasks.json command 에 붙여넣기

"command": "Scripts\\python.exe",

main.py 에서 Ctrl + Shift + B 실행(난 안됨)

<br />

file - Preferences - settings

env 검색 후 Python 클릭

Python > Terminal: Activate Environment 클릭해제 (Ctrl + Shift + B 실행 input 입력 정상적으로 받기 위해)

<br />

[목차로](#목차)

<br />

---

<br />

### 개발_환경_설정

<br />

프레임워크, 오픈소스 활용

<br />

파이썬 장점

* 문법 간결

* 다양한 운영체제 지원

* GUI(마우스로 아이콘 클릭해서 프로그램 실행시킬 수 있는 환경) Application 개발(PyQT)

* 방대한 라이브러리 지원(프레임워크, 오픈소스 - 이미 잘 만들어진 라이브러리 깃허브에서 찾아서 설치해서 즉시 이용)

* 범용 언어(네트워크, 웹, 데이터분석, 기계학습 등)

<br />

공부 방법

* 반드시 직접 코딩 실습
* 어려우면 패스하고 숙련도 쌓이면 해결
* 복습 코딩 및 응용 실습
* 천천히 확실하게 학습

<br />

VSCode 언어 변경(영어로 쓰는게 좋음)

익스텐션(View - Extensions)에서 korean

컨트롤 쉬프트 P - Configure Display Language

강의상에서는 locale.json 이 생성되는데 "locale":"en" 여기 en 말고 ko로 바꾸고 재실행하는데

나는 Configure Display Language 누르자마자 재실행 메세지 나와서 바로 됨

<br />

File - Preferences - Keyboard Shortcuts 단축키 찾기

<br />

[목차로](#목차)

<br />

---

<br />

### Print

<br />

- 가장 기본적인 Output(출력) 함수
- 기본 출력
- Separator, End 옵션 사용
- Format 형식 출력
- Escape Code 사용법

<br />

[section02-1.py 참고](https://github.com/seol-yu/TIL/blob/master/Python/Python_Basic_To_Advanced/Python/python_basic/section02-1.py)

<br />

[목차로](#목차)

<br />

---

<br />

### 코딩해보기

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 가상환경_설정_패키지_설치

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 자료형1

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 자료형2

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 자료형3

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 자료형4

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 자료형5

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 조건문

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 반복문

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 함수_람다

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 클래스1

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 클래스2

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 모듈_패키지

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 파일

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 에러_예외_처리

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 외부_파일

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### DB1

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### DB2

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### DB3

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 타이핑_게임

<br />



<br />

[목차로](#목차)

<br />

---

<br />

### 알고리즘_셋팅

<br />



<br />

[목차로](#목차)

<br />