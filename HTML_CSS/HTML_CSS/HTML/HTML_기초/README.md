<p align="center">
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/HTML">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/html-badge-logo.png?raw=true" height=30 /></a>
    <a href="https://github.com/seol-yu/TIL/tree/master/HTML_CSS/HTML_CSS/HTML">
    <img src="https://github.com/seol-yu/TIL/blob/master/images/css-badge-logo.png?raw=true" height=30 /></a>
</p>


### 목차

[태그 해부](#태그_해부)

[제목과 문단 Headings & Paragraph](#제목_문단)

[강조 Emphasis](#강조_Emphasis)

[링크 Anchor](#링크_Anchor)

[이미지 Image](#이미지_Image)

[리스트 Lists](#리스트_Lists)

[정의 리스트 Description List](#정의_리스트_Description_List)

[인용 Quotations](#인용_Quotations)

[흑마법 Div & Span](#Div_Span)

[Form(1) - Form](#Form)

[Form(2) - Input](#Form_Input)

[Form(3) - Label](#Form_Label)

[Form(4) - Radio & Checkbox](#Form_Radio_Checkbox)

[Form(5) - Select & Option](#Form_Select_Option)

[Form(6) - Textarea](#Form_Textarea)

[Form(7) - Buttons](#Form_Buttons)

[표 Table](#표_Table)

[미디어 파일 Media](#Media)

[기타 Etc](#Etc)

[Doctype & Document Structure](#Doctype_Document_Structure)

[Title, Link, Style & Script](#Title_Link_Style_Script)

[Meta](#Meta)

[마무리](#마무리)

<br />

---

<br />

### 태그_해부

<br />

`<p> 내용 </p>`

```html
<h1> 마크업 종류에 따라 다른 태그들 </h1>
<p> 문단 뜻하는 태그 p </p>
<a href="#"> 링크 </a>
```

```html
<p attr="value"></p>
<!-- 태그의 성격을 디테일하게 주고 싶을 때 쓰는 것이 attribute 속성 -->

<p lang="ru">
    러시아어가 쓰여있다고 치자
</p>
```

cf) html lang value 구글링

<br />

* 꺽쇠에서 시작해서 꺽쇠에서 끝나는 `<태그>`
* `속성attribute`을 통해 추가적인 정보를 제공
* 다양한 태그와 `웹 표준에 맞는` 올바른 사용법을 익힌다


<br />

[목차로](#목차)

<br />

---

<br />

### 제목_문단

<br />

h1, h2, h3, h4, h5, h6 레벨별로

```html
<h1>
    제목. 가장 중요한
</h1>
<h2>
    두 번째로 중요
</h2>
<h3>
    그 다음으로 중요
</h3>
```

```html
<p>
    문단
</p>
```

<br />

[목차로](#목차)

<br />

---

<br />

### 강조_Emphasis

<br />

```html
<p>
    영어를 더 잘하고 싶다
    <strong>강조</strong>
</p>
```

```html
<em>강조</em>
<strong>강조</strong>
```

<br />

em

strong

쓰고 싶은 것 쓰자

<br />

p 태그 안에서 줄 바꿈 `<br />` 쓰면 되는데 남용X

<br />

[목차로](#목차)

<br />

---

<br />

### 링크_Anchor

<br />

현 위치에서 다른 위치로 이동. 다른 맥락으로 이동

:warning:Syntax Alert 문법주의) `반드시 속성 써야함`

```html
<a href="주소"> 링크 </a>
```

href <- hypertext(HTML 문서, 웹 페이지) reference(주소값)

<br />

href 주소값 표기 방법

1) 웹 URL

```html
<a href="https://github.com/seol-yu">
    주소로 이동
</a>

<a href="./about.html">
	HTML 문서 있는 위치 상대 경로
</a>
```

2) 페이지 내 이동

```html
<a href="#hello">
    샵 밑에 id 속성값에 쓴 값
	hello 섹션으로 이동
</a>

<section id="hello">
	여기로 이동하려면 id 속성값 주기
</section>
```

3) 메일 주소

```html
<a href="mailto:메일주소"></a>
<a href="mailto:emailaddress@gmail.com">
    이렇게 하면 메일쓰기가 열린다
</a>
```

4) 전화 걸기

```html
<a href="tel:01012345678">
	전화걸기
</a>
```

<br />

target="_blank"

새탭으로 이동

```html
<a href="https://github.com/seol-yu" target="_blank">
    새창으로 열린다
</a>
```

<br />

[목차로](#목차)

<br />

---

<br />

### 이미지_Image

<br />

`이미지 태그는 반드시 사용해야할 속성이 2개`있다

```html
<img src="#" alt="" />
```

src <- source.. 이미지 파일 상대 경로 or 이미지 주소값(절대 경로)을 값으로

alt <- alternative text. 대체 텍스트

<br />

alt 대체 텍스트의 경우,

screen reader 스크린리더 웹 읽어주는 도구가 있는데(for 시각장애인)

이미지 뭔지 알려주는 용도

<br />

[목차로](#목차)

<br />

---

<br />

### 리스트_Lists

<br />

* ol (ordered list) 순서가 중요한 리스트 ex) 실시간 검색어
* ul (unordered list) 순서가 의미없는 리스트

위 두개는 안에 <li></li> 이것들이 있어야 하는데

li <- list item

:warning:ul, ol 태그 직계 `자식 요소로는 li만` 올 수 있다

<br />

```html
<h1>
    개발 분야
</h1>

<ul style="list-style-type: none;">
    <li>웹 개발자</li>
    <li>서버 개발자</li>
    <li>프론트엔드 개발자</li>
    <li>자바 개발자</li>
    <li>안드로이드 개발자</li>
    <li>ios 개발자</li>
    <li>파이썬 개발자</li>
    <li>시스템, 네트워크 관리자</li>
</ul>
```

<br />

아래는 순서가 중요하니까 ol 태그!

```html
<h1>
    급상승 검색어
</h1>

<ol>
    <li>
        <a>
            이설유
        </a>
    </li>
    <li>프론트엔드 개발</li>
    <li>개발</li>
    <li>프로그래밍</li>
    <li>코딩</li>
    <li>개발자</li>
    <li>프로그래머</li>
    <li>코더</li>
    <li>디벨로퍼</li>
    <li>컴퓨터</li>
</ol>
```

<br />

[목차로](#목차)

<br />

---

<br />

### 정의_리스트_Description_List

<br />

1. 용어를 정의할 때

2. key-value로 정보를 제공할 때

   key-value <- { key: value }

<br />

관련 태그들은 아래와 같다

* `dl` <- description list. dl태그 안에는 dt, dd 태그가 함께 따라옴

* `dt` <- description term. key값에 해당

* `dd` <- description data. 설명

* `dfn` <- :warning: Syntax Alert 문법 주의

  ```html
  <dl>
      <dt>
          <dfn>학습</dfn>
      </dt>
      <dd>
          배워서 익히는 일. 교육학에서는, 지식의 획득, 인식의 발전, 습관의 형성 등을 목표로 하는 의식적 행동을 가리킴
      </dd>
      <dd>
          심리적, 행동적 경험을 쌓음으로써 행동의 양태가 변화, 발전하는 일
      </dd>
  </dl>
  ```


<br />

:warning: Syntax Alert 문법주의

좋은 예

```html
<dl>
    <dt>이설유</dt>
    <dd>훌륭한 개발자로 성장</dd>
</dl>

<dl>
    <dt>
        <dfn>development</dfn>
    </dt>
    <dd>1. [U] 발달, 성장</dd>
    <dd>2. [U, C] (신제품의) 개발; 신개발품</dd>
    <dd>dd 태그 이렇게 여러개 써도됨</dd>
</dl>

<dl>
    <dt>이설유</dt>
    <dt>Lee Seolyu</dt>
    <dd>훌륭한 개발자로 성장</dd>
</dl>
<!-- { 이설유, Lee Seolyu: 훌륭한 개발자로 성장 } -->

<dl>
    <dt>이설유</dt>
    <dt>Lee Seolyu</dt>
    <dd>훌륭한 개발자로 성장</dd>
    <dd>
        <a href="https://github.com/seol-yu">내 깃헙</a>
    </dd>
</dl>

<dl>
    <div>
        <dt>사과</dt>
        <dd>사과에 대한 설명</dd>
    </div>
</dl>

<dl>
    <div>
        <dt>사과</dt>
        <dd>사과에 대한 설명</dd>
    </div>
    <div>
        <dt>바나나</dt>
        <dd>바나나에 대한 설명</dd>
    </div>
</dl>
```

<br />

:poop: 좋지 않은 예

```html
<!-- dt 태그 연속은 괜찮지만 dt에 대한 설명 dd 따라왔는데 새로운 dt에 대한 설명 없어서 -->
<dl>
    <dt>이설유</dt>
    <dd>훌륭한 개발자로 성장</dd>
    <dt>데벨업</dt>
</dl>

<!-- 뒤진다: dl의 자식요소는 오직 div, dt, dd만 가능 -->
<dl>
    <section>
        <dt>이설유</dt>
        <dd>훌륭한 개발자로 성장</dd>
    </section>
</dl>

<!-- dt와 dd는 반드시 dl의 자식요소로 존재해야 한다 -->
<dt>
    이설유
</dt>
```

<br />

[목차로](#목차)

<br />

---

<br />

### 인용_Quotations

<br />

* `blockquote`  <- 저자가 인용한 것을 가져왔구나. 인덴트가 됨

  `cite`  <- blockquote의 출처구나

  blockquote의 cite 속성값으로 사이트 주소

* `q`  <- 문장 내에 살짝 들어가는 인용문 쓸 때. 따옴표 생김

`<blockquote>인용 내용</blockquote>`

```html
<blockquote cite="https://seol-yu.github.io">
    우리가 겪을 수 있는 가장 아름다운 체험은 신비다.<br />
    신비는 모든 참 예술과 과학의 근원이다.
    <cite>알버트 아인슈타인</cite>
</blockquote>

<q>
    우리가 겪을 수 있는 가장 아름다운 체험은 신비다.<br />
    신비는 모든 참 예술과 과학의 근원이다.
</q>
```

<br />

```html
<blockquote cite="인용글출처링크_밑에글은이주소에서가져왔다">
    <p>
        문단1
    </p>
    <p>
        문단2
    </p>
    <p>
        <q>인용문. 쌍따옴표생김</q>
    </p>
    <cite>인용글출처랑 링크</cite>
</blockquote>
```

<br />

[목차로](#목차)

<br />

---

<br />

### Div_Span

<br />

div랑 span(<- span은 텍스트 일부분 그룹ing)은.. 아무런 의미가 없음

<br />

css 스타일링할 때 요소를 묶어야할 때 유용

정말 아무리 생각해도 떠오르는 태그가 없을 때 사용

<br />

[목차로](#목차)

<br />

---

<br />

### Form

<br />

```html
<form action="" method="">사용자한테 정보 받고 싶다</form>
```

사용자로부터 `인풋Input`을 받기 위한 태그

<br />

:warning:Syntax Alert 문법 주의

반드시 적어야 할 속성 2개

* action = "API 주소"

  이거 처리해 줄 `API` 서버쪽 친구에게 접근 가능한 URL

  그럼 그 URL 값은 어떻게 알죠? 백엔드 Backend 개발자로부터 처리할 애 경로 알 수 있다

* method = "GET | POST"

  중요한 정보 있거나 정보의 양이 엄청 많을 땐 POST

  웬만하면 GET

<br />

form 안에 채울 다양한 `필드Field 태그`를 배워보자

<br />

[목차로](#목차)

<br />

---

<br />

### Form_Input

<br />

```html
<input type="text" />
```

input

입력창, 인풋 필드 Input field

<br />

:warning:Syntax Alert 문법 주의

type="?" 반드시 적어야 함

text, email, password, number, tel, file and more...

그에 맞는 입력창 생김

<br />

모든 input에 적용 가능한 기본적인 사용법 + type마다 추가되는 특수 사항

<br />

```html
<form action="" method="GET">
    <input type="text" placeholder="아이디를 입력하세요(아무 값도 없을 때 보여줄 기본문구)" minlength="5" maxlength="13" required />
    <input type="text" placeholder="아이디를 입력하세요(아무 값도 없을 때 보여줄 기본문구)" minlength="5" maxlength="13" disabled />
    <input type="text" placeholder="아이디를 입력하세요(아무 값도 없을 때 보여줄 기본문구)" minlength="5" maxlength="13" value="이설유" />
    <button>
        Submit
    </button>
</form>
```

required <- 꼭 입력해야하는

disabled <- 사용자가 입력 못하게

value는 placeholder(안내문구)와 달리 복사할 수 있는 텍스트

<br />

```html
<form action="" method="GET">
    <input type="email" placeholder="이메일을 입력하세요" />
    <input type="password" placeholder="비밀번호를 입력하세요" minlength="6" />
    <input type="url" placeholder="포트폴리오 URL을 적으시오" />
    <input type="number" min="12" max="122" placeholder="나이를 입력하세요 (12세 이상 122세 이하)" />
    <input type="file" accept=".png, .jpg" />
    <button>
        Submit
    </button>
</form>
```

type을 적으면 그 형식에 맞게 적어야 Submit 할 수 있다

<br />

[목차로](#목차)

<br />

---

<br />

### Form_Label

<br />

```html
<label> 라벨 </label>
```

폼 양식 필드들에 이름을 붙이는 태그

<br />

:warning:Syntax Alert 문법 주의

나 누구를 위한 라벨이야?

```html
<label for="인풋id"> 라벨 </label>
<input id="인풋id" type="text" />
```

라벨 누르면 연결된 인풋박스 포커스됨

<br />

[목차로](#목차)

<br />

---

<br />

### Form_Radio_Checkbox

<br />

`Radio` 는 하나만 선택 가능:one:

꼭 써줘야하는 속성은

* `name` <- 같은 소속은 같게

* `value` <- 어떤 항목 구분. 다르게

input 안의 id값을 label의 for에다가

여러가지 항목 중 하나만 선택 가능해야하므로

같은 소속임을 알려주기 위해 name값을 준다

```html
<form action="" method="GET">
    <input type="radio" name="subscription" id="subscribed" />
    <label for="subscribed">구독중</label>
    <input type="radio" name="subscription" id="unsubscribed" />
    <label for="unsubscribed">미구독</label>
    <button type="submit">
        Submit
    </button>
</form>
```

위처럼

GET 방식으로 form을 제출하게되면 url 봤을 때 ?subscription=on 이런 이상한게 붙는다

근데 구독중 미구독 둘 다 똑같이 subscription=on 이 붙어서 뭐가 선택되었는지 알 길이 없다

name=value 로 서버에 전달이 되므로

`name과 value 꼭 써야한다`

name은 연관(소속), value는 어떤 항목이 선택되었는지 구분

value는 각각 다르게 적어준다

<br />

```html
<form action="" method="GET">
    <input type="radio" name="subscription" value="subscribed" id="subscribed" />
    <label for="subscribed">구독중</label>
    <input type="radio" name="subscription" value="unsubscribed" id="unsubscribed" />
    <label for="unsubscribed">미구독</label>
    <button type="submit">
        Submit
    </button>
</form>
```

<br />

위와 같이 해줘야

subscription=subscribed

subscription=unsubscribed

전송하게됨

구분할 수 있게 작성하면 된다

<br />

```html
<form action="" method="GET">
    <input type="radio" name="subscription" value="1" id="subscribed" />
    <label for="subscribed">구독중</label>
    <input type="radio" name="subscription" value="0" id="unsubscribed" />
    <label for="unsubscribed">미구독</label>

    <hr />

    <input type="radio" name="apple" value="1" id="subscribed" />
    <label for="apple">사과</label>
    <input type="radio" name="apple" value="0" id="unsubscribed" />
    <label for="unapple">안 사과</label>
    <button type="submit">
        Submit
    </button>
</form>
```

/?subscription=1&apple=0

<br />

<br />

`Checkbox` 는 다중선택 가능:ballot_box_with_check::ballot_box_with_check:

여기도 name과 value를 써준다

```html
<h1>
    사용 가능 언어
</h1>

<form>
    <input type="checkbox" name="skills" value="html" id="html" />
    <label for="html">HTML</label>
    <input type="checkbox" name="skills" value="css" id="css" />
    <label for="css">CSS</label>
    <input type="checkbox" name="skills" value="js" id="js" />
    <label for="js">JavaScript</label>

    <button type="submit">
        submit
    </button>
</form>
```

/?skills=html&skills=css&skills=js

<br />

[목차로](#목차)

<br />

---

<br />

### Form_Select_Option

<br />

select에만 name을 줘도 

자식요소로 option이 와서 value가 누구를 위한 값인지 알 수 있다

```html
<form action="" method="GET">
    <label for="skill">스킬</label>
    <select name="skill" id="skill">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="js">JavaScript</option>
    </select>
    <button type="submit">
        Submit
    </button>
</form>
```

/?skill=js

label 태그 for에는 select의 id값

<br />

여러가지 고르고 싶을 땐 select 옆에 multiple 적는다

```html
<form action="" method="GET">
    <label for="skill">스킬</label>
    <select multiple name="skill" id="skill">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="js">JavaScript</option>
    </select>
    <button type="submit">
        Submit
    </button>
</form>
```

multiple 쓰면 Ctrl + 여러개 선택 가능

/?skill=html&skill=css&skill=js


<br />

[목차로](#목차)

<br />

---

<br />

### Form_Textarea

<br />

여려줄로 많은 값 받을 때

rows, cols 필수는 아님 css로도 가능

```html
<input type="text" />

<!-- <textarea rows="40" cols="50"></textarea> -->
<label for="field">자기소개:</label>
<textarea id="field" placeholder="자기소개를 입력하세요">
</textarea>
```

<br />

[목차로](#목차)

<br />

---

<br />

### Form_Buttons

<br />

:warning:Syntax Alert 문법 주의

반드시 적어줘야하는 속성은 type=""

버튼은 타입 3개인데 button과 submit 많이 씀

* button <- 웬만한 것들은
* submit <- form을 제출할 때
* reset <- 리셋할 때

```html
<button type="button">
    버튼
</button>

<form action="">
    <input type="text" />
    <button type="submit">제출하기</button>
    <button type="reset">다시쓰기</button>
</form>
```

<br />

[목차로](#목차)

<br />

---

<br />

### 표_Table

<br />

데이터를 담은 표를 만들 때 사용

```html
<table>
    <tr>
        <th>테이블 헤더 bold체로 항목 생성됨</th>
        <td>테이블 데이터</td>
    </tr>
</table>
```

```html
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>이름</th>
            <th>개발분야</th>
            <th>기타</th>
        </tr>
    </thead>
    
    <tbody>
        <tr>
            <td>00001</td>
            <td>이설유</td>
            <td>프론트엔드</td>
            <td>etc</td>
        </tr>
        <tr>
            <td>00002</td>
            <td>이름</td>
            <td>백엔드</td>
            <td></td>
        </tr>
    </tbody>
    
    <tfoot>
        
    </tfoot>
</table>
```

`thead`와 `tbody`로 묶어주면 보기에 편하고 더 명시적으로

그리고 총합같은 것 쓸 땐 `tfoot` 태그

<br />

rowspan="숫자"

colspan="숫자"

scope="row|col"  <- 테이블 헤더 `th` 에만 쓸 수 있음. 어떤건 가로줄 / 세로줄 헤더니까 명확하게 설명해주기 위해

```html
<!DOCTYPE html>
<html lang="ko">

    <head>
        <meta charset="UTF-8" />
        <title>표 Table</title>
        <link rel="stylesheet" href="./11Table.css" />
    </head>

    <body>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th scope="col">월</th>
                    <th scope="col">화</th>
                    <th scope="col">수</th>
                    <th scope="col">목</th>
                    <th scope="col">금</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row">1교시</th>
                    <td rowspan="2">왕초보 HTML &amp; CSS</td>
                    <td>모각코</td>
                    <td rowspan="2">왕초보 HTML &amp; CSS</td>
                    <td>모각코</td>
                    <td rowspan="2">왕초보 HTML &amp; CSS</td>
                </tr>
                <tr>
                    <th scope="row">2교시</th>
                    <!-- <td>왕초보 HTML &amp; CSS</td> -->
                    <td rowspan="2">JavaScript 스킬업</td>
                    <!-- <td>왕초보 HTML &amp; CSS</td> -->
                    <td rowspan="2">JavaScript 스킬업</td>
                    <!-- <td>왕초보 HTML &amp; CSS</td> -->
                </tr>
                <tr>
                    <th scope="row">3교시</th>
                    <td>JavaScript 시작반</td>
                    <!-- <td rowspan="2">JavaScript 스킬업</td> -->
                    <td>JavaScript 시작반</td>
                    <!-- <td rowspan="2">JavaScript 스킬업</td> -->
                    <td>JavaScript 시작반</td>
                </tr>
                <tr>
                    <th colspan="6">점심시간</th>
                </tr>
                <tr>
                    <th scope="row">4교시</th>
                    <td>SASS 기초반</td>
                    <td rowspan="2">HTML &amp; CSS 포트폴리오반</td>
                    <td rowspan="2">Open Seminar</td>
                    <td rowspan="2">HTML &amp; CSS 포트폴리오반</td>
                    <td>SASS 기초반</td>
                </tr>
                <tr>
                    <th scope="row">5교시</th>
                    <td>모각코</td>
                    <!-- <td rowspan="2">HTML &amp; CSS 포트폴리오반</td> -->
                    <td>모각코</td>
                </tr>
            </tbody>
        </table>
    </body>

</html>
```

<br />

[목차로](#목차)

<br />

---

<br />

### Media

<br />

미디어 파일 Media Files

텍스트 아닌 이미지, 오디오, 비디오 ..

앞서 본 이미지 태그

```html
<img src="" alt="" />
```

<br />

일타N피 - 하나를 알면 10을 알 수 있다

<br />

`audio` 태그는 그냥 써보면 아무것도 안보이는데 `controls`(값 써줄 필욘 없음) 써주면 보임

reload 했을 때 바로 자동 재생되게 하려면 `autoplay`(따로 값 써줄 필욘 없음)

loop은 반복 재생

src는 무조건 써줘야함 경로 알려주기 <- 소스 하나만 넣기

src 말고 안에 source 태그로 써줄 수도 있음. 코드 확인하기 <- 브라우져가 mp3 지원하지 않을 수도 있으니까 wav, ogg 등 여러 소스들 넣을 때 이 방식 사용

```html
<audio src=""></audio>
```

```html
<!-- <audio src="./assets/audios/music.mp3" controls></audio> -->
<!-- <audio src="./assets/audios/music.mp3" loop autoplay></audio> -->

<audio controls>
    <source src="./assets/audios/music.wav" type="audio/wav"/>
    <source src="./assets/audios/music.mp3" type="audio/mpeg"/>
    <source src="./assets/audios/music.ogg" type="audio/ogg"/>
    <p>
        브라우저를 크롬 깔아서 써라
    </p>
</audio>
```

caniuse.com

<br />

`video` 태그도 위와 마찬가지

src 반드시 써줘야하고

controls 쓰면 재생버튼(컨트롤) 나옴

autoplay <- 자동재생

loop <- 반복

그리고 src 속성 안써주고

안에 source 태그로 쓸 수 있다

그리고 거기엔 type 써줘야함

```html
<video controls src="./assets/videos/dog.mov"></video>

<video contols>
    <source src="./assets/videos/dog.mov" type="video/mp4" />
    <source src="./assets/videos/dog.mp4" type="video/mp4" />
    <p>
        브라우저 업데이트
    </p>
    <a href="https://browsehappy.com/">브라우저 업데이트하러가기</a>
</video>
```

<br />

`iframe` 태그는 html 태그 안에 또 다른 html 문서/콘텐츠 집어넣을 때, share할 때

```html
<iframe src="https://seol-yu.github.io/" frameborder="0"></iframe>
```

<br />

[목차로](#목차)

<br />

---

<br />

### Etc

<br />

abbreviation 약자, 약어

title 속성 써줘야 함

```html
<abbr title="풀네임">약어</abbr>
```

```html
<abbr title="Hypertext Markup Language">HTML</abbr>
```

<br />

address

```html
<address>연락처</address>
```

```html
<address>
    <h1>
        이설유
    </h1>
    <a href="https://seol-yu.github.io">https://seol-yu.github.io</a>
</address>
```

예시:

1. (물리적) 주소
2. URL
3. email 주소
4. 전화번호
5. SNS

<br />

p태그는 포맷한대로 안만들어지고 엔터키 안먹고 그냥 스페이스 처리

pre태그는 작성한대로 나온다

preformatted text, code

pre 태그 안에 `code`를 쓰는 경우가 많다

code는 인덴트가 중요하니까

```html
<pre>
이설유
사랑해요
ㅇ ㅏ ㄴ ㅕ ㅎ ㅏ ㅅ ㅔ ㅇ
  ㄴ    ㅇ              ㅛ
  <code>
      console.log('hello lee');
        var lee = 'seolyu';
  </code>
</pre>
```

<br />

[목차로](#목차)

<br />

---

<br />

### Doctype_Document_Structure

<br />

매우 중요

HTML 문서도 지켜야할 기본 규격이란 게 있다

```html
<!DOCTYPE html>

<html>
    <head>
        <!-- 웹 문서에 관한 메타 데이터 -->
    </head>
    
    <body>
        <!-- 웹 문서에 들어갈 내용 -->
        <h1>제목</h1>
        <p>문단</p>
    </body>
</html>
```

Document Type Declaration

= DTD 선언

= 문서 형식 선언

```html
<!DOCTYPE html>
```

브라우저야, 이 문서는 HTML5 버전으로 작성된 문서야

그러니까 그에 맞춰서 오류 없이 잘 렌더링해주세요

document 문서 = HTML 그 자체

<br />

HTML 문서는 

```html
<!DOCTYPE html>
```

이걸로 시작한다는 사실을 기억해라!

<br />

[목차로](#목차)

<br />

---

<br />

### Title_Link_Style_Script

<br />

head 태그 안에 들어가는 태그들 배워보자

<br />

`title` 태그 중요하다 - 탭에 보임

```html
<title>문서의 대제목</title>
```

검색 최적화(Search Engine Optimization)에 매우 중요

검색 최적화는 기본

`title` 잘 쓰는 방법

1. 키워드 단순 나열은 비추

2. 페이지마다 그에 맞게 변경!

   무엇에 관한 내용인지 센스있게~

<br />

CSS 스타일시트를 첨부하는 태그

link:css하고 탭키 누르면 자동완성

폰트도 중요한데(디자인) 이것도 link태그 쓴다 ex) Spoqa Han Sans 사이트

웹폰트 저장된 css 파일 link 태그로 있는거 가져다 써보자

```html
<link rel="stylesheet" href="./styles.css">
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>이설유의 HTML과 CSS</title>
    <link rel="stylesheet" href="./15styles.css">
    <link href='https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' rel='stylesheet' type='text/css'>
</head>
<body>
    <h1>이설유</h1>
    <p style="font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';">
        안녕하세요 이설유입니다
    </p>
</body>
</html>
```

<br />

`<style> /* CSS 코드 */ </style>`

이렇게 하면 link로 css파일 연결한거보다 우선순위 높게 처리됨(이런 식으로 안쓰는 게 좋긴함)

HTML 문서 내에 CSS 코드 작성할 때

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>이설유의 HTML과 CSS</title>
    <link rel="stylesheet" href="./15styles.css">
    <style>
        h1 {
            color: blue;
        }
    </style>
</head>
<body>
    <h1>이설유</h1>
</body>
</html>
```

<br />

아래는 body 태그 안에 작성

<br />

`<script src="경로"></script>`

`<script> // 자바스크립트 코드 </script>`

HTML 문서 내에 JavaScript 파일을 첨부할 때 사용

script:src 탭키 자동완성

```html
<script src="./app.js"></script>
```

HTML 문서 내에 JavaScript 코드를 작성할 때 사용

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>이설유의 HTML과 CSS</title>
    <link rel="stylesheet" href="./15styles.css">
    <style>
        h1 {
            color: blue;
        }
    </style>
</head>
<body>
    <h1>이설유</h1>
    <script src="./app.js"></script>
    <script>
        var h1 = document.querySelector('h1');
        h1.addEventListener('click', function(event) {
            this.textContent = 'hi'
        })
    </script>
</body>
</html>
```

왜 script는 head 안에 안 쓰나요?

다 로드될 때까지 기다려서

바디 내에서도 가장 마지막에 씀

예전에 배웠던거 defer 확인해보기

<br />

[목차로](#목차)

<br />

---

<br />

### Meta

<br />

메타 태그 속성 2개 써줘야함

* name="메타데이터 종류"
* content="메타데이터 값"

```html
<meta name="" content="">
```

<br />

제일 중요한 메타 태그는 아래

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

viewport 는 화면 사이즈

width=device-width 는 화면 사이즈 가로를 디바이스 너비에 맞춰 표시

initial-scale=1.0 은 초기 화면 배율을 1.0 즉 100% 본래 사이즈로

<br />

```html
<meta name="author" content="이설유">
```

```html
<meta name="keywords" content="이설유, 홈페이지">
```

```html
<meta name="description" content="~~~">
```

필요하면 찾아서 작성

<br />

[목차로](#목차)

<br />

---

<br />

### 마무리

<br />

마크업의 기술

가장 중요한 대전제 : 정답이란건 없다

나만의 마크업 접근 방식 +

<br />

[목차로](#목차)

<br />

