# 데이터 타입

v_str1 = "Seolyu"   # String 문자열
v_bool = True       # Boolean
v_str2 = "Python"
v_float = 10.3      # 실수. 자동 형 변환
v_int = 7           # 정수
# 딕셔너리 - key와 value
v_dict = {
    "name": "Lee",
    "age": 25
}
v_list = [3, 5, 7]  # list 리스트(배열)
v_tuple = 3, 5, 7   # tuple 튜플
v_set = {7, 8, 9}   # set 집합

print(type(v_str1))     # <class 'str'>
print(type(v_bool))     # <class 'bool'>
print(type(v_str2))     # <class 'str'>
print(type(v_float))    # <class 'float'>
print(type(v_int))      # <class 'int'>
print(type(v_dict))     # <class 'dict'>
print(type(v_list))     # <class 'list'>
print(type(v_tuple))    # <class 'tuple'>
print(type(v_set))      # <class 'set'>

print()

i1 = 39
i2 = 939
big_int1 = 99999999999999999999999999999999999999
big_int2 = 77777777777777777777777777777777777777
f1 = 1.234
f2 = 3.784
f3 = .5
f4 = 10.

print(i1 * i2)
print(big_int1 * big_int2)
print(f1 ** f2)
print(f3 + i2)  # 자동으로 형변환이 이루어짐. 실수로

print()

result = f3 + i2
print(result, type(result))  # 939.5 <class 'float'> <- type 이 저절로 바뀜(자동 형변환)

print()

a = 5.
b = 4
c = 10

print(type(a), type(b))  # <class 'float'> <class 'int'>
result2 = a + b
print(result2)  # 9.0 <- 실수

print()

# 형변환
# int, float, complex(복소수)

print(int(result2))     # 9
print(float(c))         # 10.0
print(complex(3))       # (3+0j)
print(int(True))        # 1
print(int(False))       # 0
print(int('3'))         # 3
print(complex(False))   # 0j

print()

# 단항연산자
y = 100
y *= 100
print(y)

print()

# 수치 연산 함수
# https://docs.python.org/3/library/math.html

print(abs(-7))          # 절대값
n, m = divmod(100, 8)   # 100을 8로 나눠서 몫은 n에 나머지는 m에
print(n, m)             # 12 4

print()

import math  # 수학 관련 패키지 사용할 수 있는 모듈 불러오기

print(math.ceil(5.1))       # 5.1보다 크면서 가장 작은 정수 6
print(math.floor(3.874))    # 3.874 이하 수 중에서 가장 큰 정수