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

<br />
