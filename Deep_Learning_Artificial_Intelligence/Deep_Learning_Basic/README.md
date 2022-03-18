<br />

Python

고등학교 수학: 미분 개념, 행렬 연산 (e.g. 내적), 지수와 로그

개념 -> 수식

<br />

혼자 구현해보기

<br />

---

<br />

anaconda download 구글링해서 다운받기

<br />

`pip`

`which pip` 설치된 곳

`ipython`

```python
import numpy as np
np.__version__
exit
```

<br />

윈도우는 아나콘다 Prompt 에서 주피터 노트북

`jupyter-notebook`

<br />

---

<br />

VSCode 설치 (IDE 환경)

<br />

---

<br />

Deep Learning 딥러닝

Deep Neural Networks (DNN)을 학습시켜 문제를 해결하는 것

인공신경망(Artificial Neural Networks)의 적통을 이어받음

* Neuron들로 구성된 신경망을 학습하여 문제를 해결하도록 동작하는 함수

<br />

기존 신경망에 비하여 더 깊은 구조를 갖는 것이 특징

* 과거 학습시킬 수 없었던 깊은 신경망을 잘 학습시킬 수 있게 됨
* 인터넷 발달로 빅데이터가 널리 활용되고 이를 통해 깊은 신경망 학습 가능
* GPU르르 활용한 병렬연산에 대한 방법이 대중화, 신경망의 학습/추론 속도가 비약적으로 증가

<br />

비선형 함수.

기존 머신러닝에 비해 패턴 인식 능력이 월등함

이미지나 텍스트, 음성과 같은 분야들에서 비약적인 성능 개선을 만듦

* 기존 머신러닝과 달리 hand-crafted feature가 필요 없음
* 단순히 raw 값을 넣는 것으로 자동으로 특징(feature)을 학습

<br />

1980년대, 역전파(Back-propagation) 알고리즘의 개발로 인한 중흥기

2000년대, 근근히 이어나가던 명맥

* Restricted Boltzmann Machine (RBM) and Deep Belief Networks (DBN)
* Stacked Denoising Autoencoder

<br />

2010년대 초, ImageNet 우승과 음성인식(Speech Recognition)의 상용화

2015년, 기계번역(Machine Translation)의 상용화

2017년, 알파고(AlphaGo)의 승리

2018년, GAN을 통한 이미지 합성의 발전

<br />

* 기존 패러다임
  * Hand-crafted feature를 추출하여 머신러닝 모델에 넣고 학습
  * 여러 단계의 sub-module로 이루어져 있었음 (무거운 시스템, 단계적으로 확인 가능)
    * e.g. 음성인식, 기계번역 등
* 새로운 패러다임
  * Raw 값을 신경망에 넣으면, 자동으로 특징(feature)을 학습
  * 하나의 task에 대해서, 하나의 신경망 모델이 존재하는 end-to-end 방식 (내부적으로 까서 해석하긴 힘든)
  * 기존보다 성능이 좋다

<br />

열린 문화와 빠른 트렌드 변화

* 오픈 소스 문화 + 빠른 (무료) 논문 공유

  GitHub, arXiv.org

* 부작용: 사용자의 부담 증가

<br />

 딥러닝의 활용 사례

* 음성인식(Speech Recognition), 사용자 의도 파악(Intend Classification)
  * e.g. Apple Siri, Google Assistant, Samsung Bixby
* 기계번역(Machine Translation)
* 자율주행(Autonomous Driving)
* 객체 인식(Object Detection), 이미지 분류(Image Classification)
  * e.g. 이미지 검색
* 사진 합성(Image Generation), 사진 보정, Super Resolution
  * e.g. 흑백 사진 -> 컬러 사진, 저해상도 사진 -> 고해상도 사진
* 데이터 분석(Data Science)
  * Tabular 데이터 분석
  * 시계열(time-series) 데이터 분석

<br />

---

<br />

