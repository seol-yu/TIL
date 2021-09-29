# Section10
# 파이썬 예외처리의 이해

# 예외 종류
# 문법적으로 에러가 없지만, 코드 실행(런타임) 프로세스에서 발생하는 예외 처리도 중요
# linter : 코드 스타일, 문법 체크


# SyntaxError : 잘못된 문법

# print('Test)
# if True
#     pass
# x => y


# NameError : 참조 변수 없음

a = 10
b = 15

# print(c)


# ZeroDivisionError : 0 나누기 에러
# print(10 / 0)


# IndexError : 인덱스 범위 오버

x = [10, 20, 30]
print(x[0])
# print(x[3])  # 예외 발생


# KeyError

dic = {'name': 'Lee', 'Age': 33, 'city': 'Seoul'}

# print(dic['hobby'])
print(dic.get('hobby'))  # None


# AttributeError : 모듈, 클래스에 있는 잘못된 속성 사용시에 예외

import time
print(time.time())
# print(time.month())


# ValueError : 참조 값이 없을 때 발생

x = [1, 5, 9]

# x.remove(10)
# x.index(10)


# FileNotFoundError

# f = open('test.txt', 'r')  # 예외 발생


# TypeError

x = [1,2]
y = (1,2)
z = 'test'

# print(x + y)  # 예외
# print(x + z)

# print(x + list(y))  # 예외 형 변환

print()

# 항상 예외가 발생하지 않을 것으로 가정하고 먼저 코딩
# 그 후 런타임 예외 발생시 예외 처리 코딩 권장(EAFP 코딩 스타일)


# 예외 처리 기본
# try : 에러가 발생할 가능성이 있는 코드 실행
# except : 에러명1
# except : 에러명2
# else : 에러가 발생하지 않았을 경우 실행
# finally : 항상 실행


# 예제1

name = ['Lee', 'Kim', 'Son']

try:
    z = 'Lee'  # 없으면 예외 발생
    x = name.index(z)
    print('{} Found it! in name'.format(z, x+1))
except ValueError:
    print('Not found it! - Occurred ValueError!')
else:
    print('Ok! else!')

print()

# 예제2
try:
    z = 'Lee'
    x = name.index(z)
    print('{} Found it! in name'.format(z, x+1))
except:  # 어떤 에러가 발생할지 모를 땐. 모든 에러 캐치
    print('Not found it! - Occurred Error!')
else:
    print('Ok! else!')
    
print()

# 예제3
try:
    z = 'Lee'
    x = name.index(z)
    print('{} Found it! in name'.format(z, x+1))
except:
    print('Not found it! - Occurred Error!')
else:
    print('Ok! else!')
finally:  # 에러 발생 여부 상관없이 무조건 수행해야 하는 코드
    print('finally ok!')

print()

# 예제4
# 예외 처리는 하지 않지만, 무조건 수행되는 코딩 패턴

try:
    print('Try')
finally:
    print('Ok Finally!!!!')
        
print()

# 예제5
try:
    z = 'Lee'
    x = name.index(z)
    print('{} Found it! in name'.format(z, x+1))
except ValueError as l:  # 예측 가능한 에러 먼저
    print(l)  # 위에서 Alias로 l 줬으니까 이렇게 쓰면 에러 내용 출력
    print('Not found it! - ValueError Error!')
except IndexError:
    print('Not found it! - IndexError Error!')
except Exception:  # 이 에러 저 에러 아니면 여기서
    print('Not found it! - Occurred Error!')
else:
    print('Ok! else!')
finally:
    print('finally ok!')

print()

# 예제6
# 예외 발생 : raise
# raise 키워드로 예외 직접 발생

try:
    a = 'Lee'
    if a == 'Kim':
        print('Ok 허가!')
    else:
        raise ValueError  # 프로그래머가 규정한 에러
except ValueError:
    print('문제 발생!')
except Exception as f:
    print(f)
else:
    print('Ok!')