# Section02-2
# 파이썬 기초 코딩
# 몸풀기 코딩 실습

# import this
import sys

# 파이썬 기본 인코딩
print(sys.stdin.encoding)
print(sys.stdout.encoding)

print()

# 출력문
print('My name is seolyu')

print()

# 변수 선언
myName = 'Seolyu'  # 값(Seolyu)을 변수(myName)에 할당

print()

# 조건문 - 조건에 맞으면 실행
if myName == "Seolyu":
    print('Ok')  # indent

print()

# 반복문
for i in range(1, 10):
    for j in range(1, 10):
        print('%d * %d =' % (i,j), i*j)

print()

# 변수 선언(한글)
이름 = "설유"

# 출력
print(이름)

print()

# 함수 선언(한글)
def 인사():
    print("안녕하세요. 반갑습니다.")

인사()

print()

# 함수 선언
def greeting():
    print('Hello!')

greeting()

print()

# 클래스
class Cookie:
    pass

print()

# 객체 생성
cookie = Cookie()

print(id(cookie))
print(dir(cookie))