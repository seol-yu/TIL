# Section04-3
# 파이썬 데이터 타입(자료형)
# 리스트, 튜플

# 리스트(순서o, 중복o, 수정o, 삭제o)

# 선언
a = []
b = list()
c = [1, 2, 3, 4]
d = [10, 100, 'Pen', 'Banana', 'Orange']
e = [10, 100, ['Pen', 'Banana', 'Orange']]

print()

# 인덱싱
print(d[3])         # Banana
print(d[-2])        # Banana
print(d[0]+d[1])    # 110
print(e[2][1])      # Banana
print(e[-1][-2])    # Banana

print()

# 슬라이싱
print(d[0:2])       # [10, 100]
print(e[2][1:3])    # ['Banana', 'Orange']

print()

# 연산
print(c + d)  # [1, 2, 3, 4, 10, 100, 'Pen', 'Banana', 'Orange']
print(c * 3)  # [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
print(str(c[0])+'hi')  # 1hi

print()


# 리스트 수정, 삭제
c[0] = 77   # 리스트 값 변경
print(c)    # [77, 2, 3, 4]

c[1:2] = [100, 1000, 1000]  # 슬라이싱 쓰면 값들이 원소 하나하나로 들어감
print(c)  # [77, 100, 1000, 1000, 3, 4]

c[1] = ['a','b','c']  # 하나의 인덱스 잡고 리스트 넣으면 리스트 안에 리스트가 통으로 들어가게 됨
print(c)  # [77, ['a', 'b', 'c'], 1000, 1000, 3, 4]

del c[1]
print(c)  # [77, 1000, 1000, 3, 4]
del c[-1]
print(c)  # [77, 1000, 1000, 3]
print()
print()
print()

# 리스트 함수
y = [5, 2, 3, 1, 4]
print(y)        # [5, 2, 3, 1, 4]
y.append(6)     # append() 끝부분에 삽입
print(y)        # [5, 2, 3, 1, 4, 6]
y.sort()        # sort() 정렬
print(y)        # [1, 2, 3, 4, 5, 6]
y.reverse()     # reverse() 반대로
print(y)        # [6, 5, 4, 3, 2, 1]
y.insert(2,7)   # 2번 index에 7을 넣겠다 insert()
print(y)        # [6, 5, 7, 4, 3, 2, 1]
y.remove(2)     # remove는 데이터의 값을 삭제, del은 인덱스 삭제
print(y)        # [6, 5, 7, 4, 3, 1]
y.pop()         # pop() 맨 마지막 원소 꺼냄
print(y)        # [6, 5, 7, 4, 3] LIFO <- 스택
ex = [88,77]
y.append(ex)    # 리스트 자체를 삽입 append()
print(y)        # [6, 5, 7, 4, 3, [88, 77]]
y.extend(ex)    # 현재 리스트에 값을 연장 extend()
print(y)        # [6, 5, 7, 4, 3, [88, 77], 88, 77]

print()

# 삭제: del(인덱스로), remove(값), pop(마지막 원소)

# 튜플 (순서o, 중복o, 수정x, 삭제x) <- 프로그램에 영향을 주는 중요한 키값, 계좌번호 같은거, 변경되면 프로그램에 영향가는
a = ()
b = (1,)
c = (1, 2, 3, 4)
d = (10, 100, ('a', 'b', 'c'))

print(b)  # (1,)

print(c[2])  # 3
print(c[3])  # 4
print(d[2][2])  # c

print(d[2:])  # (('a', 'b', 'c'),)
print(d[2][0:2])  # ('a', 'b')

print(c + d)  # (1, 2, 3, 4, 10, 100, ('a', 'b', 'c'))
print(c * 3)  # (1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4)
print()
print()

# 튜플 함수
z = (5, 2, 1, 3, 1)

print(z)  # (5, 2, 1, 3, 1)
print(3 in z)  # True
print(z.index(5))  # 0 찾고자 하는 값의 인덱스
print(z.count(1))  # 2 몇개 있는지