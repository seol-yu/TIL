<br />

스프링 학습

<br />

* 스프링 입문
* 스프링 핵심 원리
* 스프링 웹 MVC
* 스프링 DB 데이터 접근 기술
* 실전 스프링 부트

<br />

간단한 웹 애플리케이션 개발

* 스프링 프로젝트 생성
* 스프링 부트로 웹 서버 실행
* 회원 도메인 개발
* 웹 MVC 개발
* DB 연동 - JDBC, JPA, 스프링 데이터 JPA
* 테스트 케이스 작성

<br />

---

<br />

1. 프로젝트 생성

   * Java 11 설치
   * IDE: IntelliJ 또는 Eclipse

   스프링 부트 스타터 사이트로 이동해서 스프링 프로젝트 생성

   https://start.spring.io

   * 프로젝트 선택

     Project: Gradle project

     Spring Boot: 2.3.x (정식 release 중 높은걸로)

     Language: Java

     Packaging: Jar

     Java: 11

   * Project Metadata

     groupId: hello

     artifactId: hello-spring

   * Dependencies: Spring Web, Thymeleaf

   GENERATE 해서 다운로드하고 IntelliJ 에서 열기

<br />

---

<br />

라이브러리

Gradle은 의존관계가 있는 라이브러리를 함께 다운로드

* 스프링 부트 라이브러리
  * spring-boot-starter-web
    * spring-boot-starter-tomcat: 톰캣(웹 서버)
    * spring-webmvc: 스프링 웹 MVC
  * spring-boot-starter-thymeleaf: 타임리프 템플릿 엔진(View)
  * spring-boot-starter(공통): 스프링 부트 + 스프링 코어 + 로깅
    * spring-boot
      * spring-core
    * spring-boot-starter-logging
      * logback, slf4j
* 테스트 라이브러리
  * spring-boot-starter-test
    * junit: 테스트 프레임워크
    * mockito: 목 라이브러리
    * assertj: 테스트 코드를 좀 더 편하게 작성하게 도와주는 라이브러리
    * spring-test: 스프링 통합 테스트 지원

<br />

View 환경 설정

* Welcome Page 만들기

  `resources/static/index.html`

  ```html
  <!DOCTYPE HTML>
  <html>
      <head>
          <title>Hello</title>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      </head>
      <body>
          Hello
          <a href="/hello">hello</a>
      </body>
  </html>
  ```

  스프링 부트가 제공하는 Welcome Page 기능

  * `static/index.html` 을 올려두면 Welcome page 기능 제공
  * https://docs.spring.io/spring-boot/docs/2.3.1.RELEASE/reference/html/spring-boot-features.html#boot-features-spring-mvc-welcome-page

  thymeleaf 템플릿 엔진

  * thymeleaf 공식 사이트: https://www.thymeleaf.org/
  * 스프링 공식 튜토리얼: https://spring.io/guides/gs/serving-web-content/
  * 스프링부트 메뉴얼: https://docs.spring.io/spring-boot/docs/2.3.1.RELEASE/reference/html/spring-boot-features.html#boot-features-spring-mvc-template-engines

<br />

* 컨트롤러에서 리턴 값으로 문자를 반환하면 뷰 리졸버(viewResolver) 가 화면을 찾아서 처리
  * 스프링 부트 템플릿엔진 기본 viewName 매핑
  * `resources:templates/` + {ViewName}+`.html`

cf) `spring-boot-devtools` 라이브러리 추가하면, `html` 파일을 컴파일만 해주면 서버 재시작 없이 View 파일 변경 가능

인텔리J 컴파일 방법: menu에서 build -> Recompile

<br />

빌드하고 실행하기

`./gradlew build`

한 후

`cd build/libs`

`java -jar hello-spring-0.0.1-SNAPSHOT.jar`

<br />

`./gradlew clean` 혹은 `./gradlew clean build` 하면 build 폴더 없어짐

<br />

---

<br />
