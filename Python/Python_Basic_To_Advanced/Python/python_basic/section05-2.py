# Section05-2
# 파이썬 흐름제어(반복문)
# 반복문 실습

# 코딩의 핵심 -> 조건 해결 중요

# 기본 반복문: for, while

v1 = 1
while v1 < 11:
    print("v1 is :", v1)
    v1 += 1

print()

for v2 in range(10):  # range(10)이면 0부터 시작해서 10미만까지 반복한다 
    print("v2 is :", v2)

print()

for v3 in range(1, 11):  # range(1, 11)이면 1부터 11미만까지
    print("v3 is :", v3)

print()

# 1 ~ 100 합
sum1 = 0
cnt1 = 0

while cnt1 <= 100:
    sum1 += cnt1
    cnt1 += 1

print('1 ~ 100 : ', sum1)
print('1 ~ 100 : ', sum(range(1, 101)))  # sum() 함수는 list를 입력받아서 그 안에 있는 숫자들을 더해줌
print('1 ~ 100 : ', sum(range(1, 101, 2)))  # 1 부터 100까지 홀수 합 구할 때. range() 함수는 시작, 끝, 증감단위

print()

# 시퀀스(순서가 있는) 자료형 반복
# 문자열, 리스트, 튜플, 집합, 사전(<-사전은 순서 없지만) <- 반복 가능
# iterable 리턴 함수: range, reversed, enumerate, filter, map, zip

names = ["Kim", "Park", "cho", "choi", "Yoo"]

for name in names:
    print("You are:", name)

print()

word = "dreams"

for s in word:
    print("Word: ", s)

print()

my_info = {
    "name": "Lee",
    "age": 33,
    "city": "Seoul"
}

# 기본 값은 키
for key in my_info:
    print("my_info", key)

print()

# 값
for key in my_info.values():
    print("my_info", key)

print()

# 키
for key in my_info.keys():
    print("my_info", key)

print()

# 키 and 값
for k, v in my_info.items():
    print("my_info", k, v)

print()

name = "sEOLyU"

for n in name:
    if n.isupper():
        print(n.lower(), end="")
    else:
        print(n.upper(), end="")

print()
print()

# break <- 조건에 맞아서 의도한 값 내고 나서 반복문을 탈출할 때
numbers = [14, 3, 4, 7, 10, 24, 17, 2, 33, 15, 34, 36, 38]

for num in numbers:
    if num == 33:
        print("found: 33!")
        break
    else:
        print("not found: 33!")

print()

# for - else 구문(중간에 break 등으로 끊기지 않고 끝까지 반복문이 수행된 경우 else 블럭 수행)
for num in numbers:
    if num == 33:
        print("found: 33!")
        # break
    else:
        print("not found: 33!")
else:
    print("Not found 33......")

print()

# continue
lt = ["1", 2, 5, True, 4.3, complex(4)]

for v in lt:
    if type(v) is float:
        continue  # continue 만나면 아래는 수행되지 않고 다음꺼로
    print("타입: ", type(v))

print()

name = "Python"
print(reversed(name))
print(list(reversed(name)))
print(tuple(reversed(name)))