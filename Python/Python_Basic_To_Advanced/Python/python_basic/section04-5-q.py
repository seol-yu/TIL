# Section04-5
# 파이썬 데이터 타입(자료형)
# 딕셔너리, 집합 자료형
# 데이터 타입 관련 퀴즈

# 1. 아래 문자열의 길이 구하기
q1 = "sdjfklasdjflksadjfklsdjaf"

print("1. ", len(q1))

print()

# 2. print 함수를 사용해 아래와 같이 출력
#    apple;orange;banana;lemon

print("2. ", """apple;orange;banana;lemon""")

print()

# 3. 화면에 * 기호 100개 표시

print("3. ", '*' * 100)

print()

# 4. 문자열 "30"을 각각 정수형, 실수형, 복소수형, 문자형으로 변환

print("4. ", int("30"))
print("4. ", float("30"))
print("4. ", complex("30"))
print("4. ", str(30))

print()

# 5. 문자열 "HelloPython"에서 "Python" 문자열만 추출

q5 = "HelloPython"
q5_idx = q5.index("Python")  # index() 함수는 찾고자 하는 단어의 시작 인덱스 번호를 리턴

print("5. ", q5[q5_idx:q5_idx+6])
print("5. ", q5[5:11])

print()

# 6. 다음 문자열을 거꾸로 출력 "Strawberry"

q6 = "Strawberry"

print("6. ", list(reversed(q6)))
print("6. ", q6[::-1])

print()

# 7. 다음 문자열에서 '-' 제거 후 출력 "010-0000-0000"

q7 = "010-0000-0000"

print("7. ", q7[0:3]+q7[4:8]+q7[9:13])


# 정규표현식

import re
print("7. ", re.sub('[^0-9]', '', q7))  # sub()는 빼는건데 ^써서 숫자는 제외

print()

# 8. 다음 문자열(URL)에서 "http://" 부분 제거 후 출력 "http://daum.net"

q8 = "http://daum.net"

print("8. ", q8[7:])

print()

# 9. 다음 문자열을 모두 대문자, 소문자로 각각 출력 "Python"

print("9. ", "Python".upper())  # 9.  PYTHON
print("9. ", "Python".lower())  # 9.  python

print()

# 10. 다음 문자열을 슬라이싱 이용해 "cde"만 출력 "abcdefghijklmn"

q10 = "abcdefghijklmn"

print("10. ", q10[2:5])

print()

# 11. 다음 리스트에서 "Apple" 항목만 삭제 ["Banana", "Apple", "Orange"]

q11 = ["Banana", "Apple", "Orange"]

q11.remove("Apple")
print("11. ", q11)

print()

# 12. 다음 튜플을 리스트로 변환 (1, 2, 3, 4)

q12 = (1, 2, 3, 4)
print("12. ", list(q12))

print()

# 13. 다음 항목을 딕셔너리(dict)로 선언 <성인 - 100000, 청소년 - 70000, 아동 - 30000>

# q13_dict = {
#     '성인': 100000,
#     '청소년': 70000,
#     '아동': 30000
# }

q13_dict = {}
q13_dict['성인'] = 100000
q13_dict['청소년'] = 70000
q13_dict['아동'] = 30000

print("13. ", q13_dict)

print()

# 14. 13번에서 선언한 dict 항목에 <소아 - 0> 항목 추가

q13_dict['소아'] = 0
print("14. ", q13_dict)

print()

# 15. 13에서 선언한 딕셔너리(dict)에서 Key 항목만 출력

print(q13_dict.keys())
print(list(q13_dict.keys()))  # list() 형변환 해야 리스트 형태로 가져올 수 있다

print()

# 16. 13에서 선언한 딕셔너리(dict)에서 value 항목만 출력

print(q13_dict.values())
print(list(q13_dict.values()))
print(tuple(q13_dict.values()))