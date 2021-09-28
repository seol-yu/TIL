# Section02-1
# 파이썬 기초 코딩
# Print 구문의 이해

# 기본 출력 - 안에 다양한 자료형 넣어서 출력 가능
print('Hello Python!')  # 작은 따옴표
print("Hello Python!")  # 큰 따옴표
print("""Hello Python!""")  # 3개 따옴표 붙여서 써도 똑같이
print('''Hello Python!''')

print()  # 어떠한 출력값도 넣지 않으면 줄바꿈

# Separator 옵션 사용
print('T', 'E', 'S', 'T', sep='')  # sep 옵션은 붙여주는 역할
print('2019', '02', '19', sep='-')
print('seolyu', 'google.com', sep='@')

print()

# end 옵션 사용
print('Welcome To', end=' ')  # 원래 줄바꿈이지만 end 옵션으로 끝 부분을 바꿔줌
print('the black parade', end=' ')
print('piano notes')

print()

# format 사용 [], {}, ()
print('{} and {}'.format('You', 'Me'))  # You and Me
print("{0} and {1} and {0}".format('You', 'Me'))  # You and Me and You
print("{a} are {b}".format(a='You', b='Me'))  # You are Me

print()

# %s : 문자, %d : 정수, %f : 실수
print("%s's favorite number is %d" % ('Seolyu', 7))

print()

print("Test1: %5d, Price: %4.2f" % (776, 7534.123))                 # Test1:   776, Price: 7534.12
print("Test1:{0: 5d}, Price:{1: 4.2f}".format(776, 7534.123))       # Test1:  776, Price: 7534.12
print("Test1: {a: 5d}, Price:{b: 4.2f}".format(a=776, b=7534.123))  # Test1:   776, Price: 7534.12

print()

"""
Escape 코드
\n : 개행
\t : 탭
\\ : 문자
\' : 문자
\" : 문자
\r : 캐리지 리턴
\f : 폼 피드
\a : 벨 소리
\b : 백 스페이스
\000 : 널 문자
"""

print("'you'")  # 'you'
print('\'you\'')  # 'you'
print('"you"')  # "you"
print("""'you'""")  # 'you'
print('\\you\\\n')  # \you\ 나온 후 개행
print('\t\t\ttest')  #                         test