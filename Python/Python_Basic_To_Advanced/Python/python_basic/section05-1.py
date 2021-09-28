# Section05-1
# 파이썬 흐름제어(제어문)
# 조건문 실습

print(type(True))   # <class 'bool'>
print(type(False))  # <class 'bool'>

print()

# 예1
if True:
    print("Yes")

print()

# 예2
if False:  # False면 스킵하고 다음으로 넘어가버림
    print("No")

print()

# 예3
if False:
    print("No")
else:
    print("Yes2")  # 이게 출력됨

print()

# 관계연산자
# >, >=, <, <=, ==, !=

a = 10
b = 0

print(a == b)   # False
print(a != b)   # True
print(a > b)    # True
print(a >= b)   # True
print(a < b)    # False
print(a <= b)   # False

print()

# 참 거짓 종류(True, False)
# 참: "내용", [내용], (내용), {내용}, 1, True
# 거짓: "", [], (), {}, 0, False

city = ""  # 빈 문자열

if city:  # 빈 문자열은 거짓이므로 넘어감
    print(">>>>True")
else:
    print(">>>>False")  # 이게 출력됨

print()

# 논리 연산자
# and or not

a = 100
b = 60
c = 15

print('and : ', a > b and b > c)    # and :  True <- and은 둘다 만족해야 True
print('or: ', a > b or c > b)       # or:  True <- or는 둘 중 하나라도 만족하면 True
print('not: ', not a > b)           # not:  False <- not은 반대로 나옴
print(not False)                    # True 
print(not True)                     # False

print()

# 산술, 관계, 논리 연산자
# 산술 > 관계 > 논리 순서로 적용
print('ex1: ', 5 + 10 > 0 and not 7 + 3 == 10)  # ex1:  False <- True and False라서 False

score1 = 90
score2 = 'A'

if score1 >= 90 and score2 == 'A':
    print("합격하셨습니다.")
else:
    print("죄송합니다. 불합격입니다.")

print()

# 다중 조건문(흐름 제어)
num = 90

if num >= 90:
    print("num 등급 A", num)
elif num >= 80:
    print("num 등급 B", num)
elif num >= 70:
    print("num 등급 C", num)
else:
    print("꽝")

print()

# 중첩 조건문
age = 27
height = 175

if age >= 20:
    if height >= 170:
        print("A지망 지원 가능")
    elif height >= 160:
        print("B지망 지원 가능")
    else:
        print("지원 불가")
else:
    print("20세 이상 지원 가능")