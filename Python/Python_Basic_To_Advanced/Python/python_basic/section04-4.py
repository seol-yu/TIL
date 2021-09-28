# Section04-4
# 파이썬 데이터 타입(자료형)
# 딕셔너리, 집합 자료형

# 딕셔너리(Dictionary): 순서x, 중복x(키), 수정o, 삭제o

# Key, Value (Json) -> MongoDB
# 선언
a = {'name': 'Lee', 'Phone': '010-0000-0000', 'birth': 990909}
b = {0: 'Hello Python', 1: 'Hello Coding'}
c = {'arr': [1, 2, 3, 4, 5]}

print(type(a))  # <class 'dict'>

print()

# 출력
print(a['name'])            # Key 없으면 에러나서
print(a.get('name'))        # get 메소드를 쓰면 안전
print(a.get('address'))     # 에러 안나고 None
print(c['arr'][1:3])        # [2, 3]

print()

# 딕셔너리 추가
a['address'] = 'Seoul'
print(a)  # {'name': 'Lee', 'Phone': '010-0000-0000', 'birth': 990909, 'address': 'Seoul'}
a['rank'] = [1, 3, 4]
a['rank2'] = (1,2,3,)
print(a)  # {'name': 'Lee', 'Phone': '010-0000-0000', 'birth': 990909, 'address': 'Seoul', 'rank': [1, 3, 4], 'rank2': (1, 2, 3)}

print()

# keys, values, items
print(a.keys())             # dict_keys(['name', 'Phone', 'birth', 'address', 'rank', 'rank2']) <- keys() 키만 리스트 형태로(인덱스 안됨 형변환 해줘야함)
print(list(a.keys()))       # ['name', 'Phone', 'birth', 'address', 'rank', 'rank2']

temp = list(a.keys())
print(temp[1:3])            # ['Phone', 'birth'] <- list 형변환 해주고 temp에 넣어서 인덱싱

print(a.values())           # dict_values(['Lee', '010-0000-0000', 990909, 'Seoul', [1, 3, 4], (1, 2, 3)]) <- values() 값만 가져옴
print(list(a.values()))     # ['Lee', '010-0000-0000', 990909, 'Seoul', [1, 3, 4], (1, 2, 3)] <- 마찬가지로 리스트로 형변환해서 사용

print(list(a.items()))      # [('name', 'Lee'), ('Phone', '010-0000-0000'), ('birth', 990909), ('address', 'Seoul'), ('rank', [1, 3, 4]), ('rank2', (1, 2, 3))] <- items() 쓰면 key, value 한쌍으로 가져옴
print(1 in b)               # True 키가 1인게 b에 있는가
print('name2' not in a)     # True

print()

# 집합(Sets) (순서x, 중복x)
a = set()
b = set([1, 2, 3, 4])
c = set([1, 4, 5, 6, 6])

print(type(a))  # <class 'set'>
print(c)        # {1, 4, 5, 6}

t = tuple(b)    # 튜플로 변환
print(t)        # (1, 2, 3, 4)
l = list(b)     # 리스트로 변환
print(l)        # [1, 2, 3, 4]

print()
print()

s1 = set([1, 2, 3, 4, 5, 6])
s2 = set([4, 5, 6, 7, 8 ,9])

print(s1.intersection(s2))  # {4, 5, 6} 교집합
print(s1 & s2)              # {4, 5, 6}

print(s1 | s2)          # {1, 2, 3, 4, 5, 6, 7, 8, 9} 합집합
print(s1.union(s2))     # {1, 2, 3, 4, 5, 6, 7, 8, 9}

print(s1 - s2)              # {1, 2, 3} 차집합
print(s1.difference(s2))    # {1, 2, 3}

print()

# 추가 & 제거
s3 = set([7, 8, 10, 15])

s3.add(18)
s3.add(7)

print(s3)  # {7, 8, 10, 15, 18}

s3.remove(15)
print(s3)  # {7, 8, 10, 18}

print(type(s3))  # <class 'set'>