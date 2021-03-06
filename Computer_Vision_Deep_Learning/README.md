<br />

컴퓨터 비전 이론

* OpenCV-Python
* 기본적인 영상 처리 기법
* 필터링과 모폴로지
* 기하학적 변환

OpenCV

* 영상의 특징 추출
* 이진 영상 처리
* 영상 분할 및 검출
* 키포인트 매칭
* 객체 추적과 모션 벡터

머신 러닝, 딥러닝

* 머신 러닝
* 딥러닝 이해와 영상
* 딥러닝과 객체 검출

<br />

Python, NumPy 라이브러리 사용법, 고등학교 수준 수학 지식

"OpenCV 4로 배우는 컴퓨터 비전과 머신 러닝"

https://github.com/sunkyoo/opencv4cvml/tree/master/python

https://docs.opencv.org/master/

<br />

컴퓨터 비전(Computer vision)

* 컴퓨터를 이용하여 정지 영상 또는 동영상으로부터 의미 있는 정보를 추출하는 방법을 연구하는 학문
* 즉, 사람이 눈으로 사물을 보고 인지하는 작업을 컴퓨터가 수행하게끔 만드는 학문

<br />

컴퓨터 비전과 영상 처리(image processing)

- 영상 처리는 영상을 입력받아 화질을 개선하는 등 처리를 하여 다시 영상을 출력하는 작업
- 영상 처리는 컴퓨터 비전을 위한 전처리 작업

vs

* 영상 처리는 영상을 다루는 모든 학문과 응용을 통틀어 지칭
* 컴퓨터 비전은 영상 인식과 같은 고수준의 영상 처리를 지칭

<br />

컴퓨터 비전 영상 처리

- 수학 - 선형대수, 확률 / 통계, 해석학, 기하학
- 컴퓨터 그래픽스
- 인지 과학
- 컴퓨터 과학 - 수치해석, 알고리즘, 최적화
- 머신러닝 - 패턴 인식, 딥러닝
- 로봇 공학
- 광학
- 신호처리 - 아날로그 신호처리, 디지털 신호처리, 주파수 분석

<br />

컴퓨터 비전 연구 분야

- 영상의 화질 개선

  Filtering App

  HDR

  Image Noise Reduction

  Super Resolution

  ..

- 객체 검출(Object detection)과 영상 분할

- 인식(Recognition)

- 머신 비전(machine vision)

  * 공장 자동화: 제품의 불량 검사, 위치 확인, 측정 등
  * 높은 정확도와 빠른 처리 시간 요구
  * 조명, 렌즈, 필터, 실시간(Real-time) 처리

- 인공지능 서비스

  * 입력 영상을 객체와 배경으로 분할 -> 객체와 배경 인식 -> 상황 인식 -> 로봇과 자동차의 행동 지시
  * Computer Vision + Sensor Fusion + Deep Learning
  * 인공지능 로봇, Amazon Go, 구글/테슬라의 자율 주행 자동차

<br />

---

<br />

OpenCV-Python 시작하기 - 영상의 구조와 표현

<br />

영상의 표현 방법

* 영상(image)?
  * 픽셀(pixel)이 바둑판 모양의 격차에 나열되어 있는 형태(2차원 행렬)
  * 픽셀: 영상의 기본 단위, picture element, 화소
* 그레이스케일(grayscale) 영상
  * 흑백 사진처럼 색상 정보가 없이 오직 밝기 정보만으로 구성된 영상
  * 밝기 정보를 256 단계로 표현
  * 픽셀 값 표현
    * 밝기 성분을 0(검정색) ~ 255(흰색) 범위의 정수로 표현
    * 프로그래밍 언어에서 표현 방법: 1Byte 사용
      * C / C++ -> unsigned char
      * Python -> numpy.uint8
* 트루컬러(truecolor) 영상
  * 컬러 사진처럼 색상 정보를 가지고 있어서 다양한 색상을 표현할 수 있는 영상
  * Red, Green, Blue 색 성분을 256 단계로 표현 -> 256³ = 16,777,216 색상 표현 가능

<br />

영상의 표현 방법

* 컬러 영상의 픽셀 값 표현

  * R, G, B 색 성분의 크기를 각각 0 ~ 255 범위의 정수로 표현
    * 0 : 해당 색 성분이 전혀 없는 상태
    * 255 : 해당 색 성분이 가능 있는 상태
  * 프로그래밍 언어에서 표현 방법: 3Bytes 사용
    * C / C++ -> 구조체, 클래스
    * Python -> 튜플, numpy.ndarray

* 영상에서 주로 사용되는 좌표계

  * w x h 영상 (w-by-h image) <- 가로 x 세로

  * M x N 행렬 (m-by-n matrix) <- 세로 x 가로

    가로 세로 명확히

* 파이썬에서 영상 데이터는 픽셀 하나가 R, G, B 이렇게 갖는 것으로 표현하지 않고  파란색 성분, 녹색 성분, 빨강색 성분 따로따로 2차원 평면 형태로 나타나고 세개가 합쳐져서 3차원 형태의 행렬로 표현 (1차원 - y 축 방향 / 2차원 - x 축 방향 / 3차원 - 색상축.. RGB 순서가 아닌 BGR 순서로 저장)

<br />

영상 데이터의 크기

* 영상 데이터 크기 분석
  * 그레이스케일 영상: (가로 크기) x (세로 크기) Bytes
  * 트루컬러 영상: (가로 크기) x (세로 크기) x 3 Bytes

<br />

최적화, 알고리즘 효율 중요 - 시간

<br />

영상 파일 형식 특징

* BMP

  * 픽셀 데이터를 압축하지 않고 그대로 저장

    -> 파일 용량이 큰 편

  * 파일 구조가 단순해서 별도의 라이브러리 도움 없이 파일 입출력 프로그래밍 가능

* JPG

  * 주로 사진과 같은 컬러 영상을 저장

  * 손실 압축(lossy compression)

  * 압축률이 좋아서 파일 용량이 크게 감소

    -> 디지털 카메라 사진 포맷으로 주로 사용

* GIF

  * 256 색상 이하의 영상을 저장

    -> 일반 사진을 저장 시 화질 열화가 심함

  * 무손실 압축(lossless compression)

  * 움직이는 GIF 지원

* PNG

  * Portable Network Graphics
  * 무손실 압축(컬러 영상도 무손실)
  * 알파 채널(투명도)을 지원

<br />

OpenCV <- 컴퓨터 비전 & 머신 러닝 오픈 소스 라이브러리

* BSD license ... Free for academic & commercial use

* Multiple interface ... C, C++, Python, Java, JavaScript, MATLAB ..

* Multiple platform ... Windows, Linux, Mac OS, iOS, Android

* Optimized ... CPU instructions, Multi-core processing, OpenCL, CUDA

  ....

<br />

OpenCV 구성

* 메인 모듈

  Core, widely used, infrastructures

  https://github.com/opencv/opencv/

* extra 모듈

  Brand new, unpopular, non-free, HW deependency...

  https://github.com/opencv/opencv_contrib/

<br />

https://opencv.org

https://docs.opencv.org/master/

https://answers.opencv.org/questions/

https://github.com/opencv/opencv/

https://github.com/opencv/opencv_contrib/

<br />

파이썬 설치

* 파이썬 3.7, 64-bit 설치 실행 파일 다운로드

  https://www.python.org/downloads/release/python-377/

  Add Python .. to PATH 체크하고 Install Now

OpenCV-python 설치

* pip 명령으로 설치하기

  `pip install opencv-python`

  * <PYTHON_PATH>\Lib\site-packages 폴더 아래에 cv, opencv_python-4.2.0.34.dist-info 폴더가 생성되고, 그 아래에 cv2.cp37-win_amd64.pyd 파일이 저장됨

  * 설치되는 OpenCV 버전은 https://pypi.org/ 에서 확인 가능

  * OpenCV 추가 모듈도 함께 사용하려면 opencv-contrib-python 패키지를 설치

  * OpenCV 4.2.0 버전에서 cv2.imread() 함수를 사용하여 영상을 그레이스케일 형식으로 불러올 때 픽셀 값 잘못 설정되는 문제 있음

    -> cv2.imread() 함수가 정상 동작하는 OpenCV를 설치하려면 `pip install opencv-python==4.1.0.25`

  * 업데이트 된 opencv-python 패키지 버전에선 고쳐진 상태

cmd 창에서

`python`

`import cv2`

`cv2.__version__`

`exit()`

<br />