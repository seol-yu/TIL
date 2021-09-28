# Section04-2
# 문자열, 문자열 연산, 슬라이싱

str1 = "I am Seolyu."
str2 = 'Python'
str3 = ''
str4 = str('ace')  # 파이썬에선 이렇게 명시적으로 쓰기 보단 그냥 씀 str4 = 'ace' 이렇게

print(len(str1), len(str2), len(str3), len(str4))  # 12 6 0 3 공백도 한글자로 센다 str()은 공백 0

print()

escape_str1 = "Do you have a \"big collection\""  # 쌍따옴표 처리 \"
print(escape_str1)
escape_str2 = "Tab\tTab\tTab"
print(escape_str2)

print()

# Raw String - 경로 표시할 때 쓰임
raw_s1 = r'C:\Programs\Test\Bin'  # C:\Programs\Test\Bin <- escape문자 적용 안됨
print(raw_s1)
raw_s2 = r"\\a\\a"  # \\a\\a <- 있는 그대로 표시
print(raw_s2)

print()

# 멀티라인 - 변수 선언 후 \ 기호 나오면 그 다음줄에 이어지는구나
multi = \
"""
문자열 

멀티라인 
테스트
"""
print(multi)

print()

# 문자열 연산
str_o1 = '*'
str_o2 = 'abc '
str_o3 =  "def"
str_o4 = "Python"  # 문자열은 한번 할당하면 수정 불가능한 순회 가능한 시퀀스 immutable

print(str_o1 * 100)         # *가 100번 반복
print(str_o2 + str_o3)      # abc def
print(str_o1 * 3)           # *** 곱하기 연산은 반복
print('y' in str_o4)        # True
print('f' in str_o4)        # False
print('z' not in str_o4)    # True

print()

# 문자열 형 변환
print(str(77) + 'a')    # 77a <- 문자와 숫자는 더할 수 없지만 str() 형변환했기에
print(str(10.4))        # 10.4

print()

# 문자열 함수
# 참고 https://www.w3schools.com/python/python_ref_string.asp

a = 'python'
b = 'orange'

print(a.islower())              # True
print(a.endswith('n'))          # True
print(a.capitalize())           # Python
print(a.replace('pyth', 'g'))   # gon
print(list(reversed(b)))        # ['e', 'g', 'n', 'a', 'r', 'o']

print()

c = 'python'
d = 'orange'

print(c[0:3])       # pyt <- 마지막 전까지 나옴 2까지
print(c[0:4])       # pyth
print(c[0:len(a)])  # python  <- 끝까지 나오게 하려면 len() 활용
print(c[:4])        # pyth <- 앞에 안쓰면 처음부터라 생각하고 c[0:4]
print(c[:])         # python <- 전체 다 나옴 c[:]
print(d[0:4:2])     # oa <- oran 에서 세번째 숫자 2만큼 건너뛰면서 슬라이싱
print(d[1:-2])      # ran <- -1이 맨 뒤이고 -2는 맨 뒤에서 두번째이므로 맨 뒤에서 세번째까지 나옴
print(d[::-1])      # egnaro <- 처음부터 끝까지인데 역순