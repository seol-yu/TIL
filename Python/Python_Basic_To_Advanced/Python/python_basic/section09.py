# Section09
# 파일 읽기, 쓰기
# 읽기 모드 : r, 쓰기 모드(기존 파일 삭제) : w, 추가 모드(파일 생성 또는 추가) : a
# .. : 상대 경로, . : 절대 경로
# 기타 : https://docs.python.org/3.7/library/functions.html#open

# 파일 읽기
# 예제1
f = open('./resource/review.txt', 'r')
content = f.read()
print(content)
print(dir(f))  # f 안에 있는 모든 속성값 볼 수 있다
# 반드시 close 리소스 반환
f.close()

print("-----🌼---------🌼---------🌼------")
print("-----🌼-------🌼---------🌼--------")


# 예제2
with open('./resource/review.txt', 'r') as f:  # f = open('./resource/review.txt', 'r') 랑 같은데 with 문은 편한게 close()를 해주지 않아도 with 문 끝나면 자동으로 리소스 반환
    c = f.read()
    print(c)
    print(list(c))  # 한글자 단위로 리스트 형태로
    print(iter(c))

print("-----🌹---------🌹---------🌹------")
print("-----🌹-------🌹---------🌹--------")


# 예제3
with open('./resource/review.txt', 'r') as f:
    for c in f:  # f 가 iterable 하기에
        print(c.strip())  # 한 라인씩 출력되는데 끝에 \n 들어가있어서 파이썬 문자열 함수인 strip() 써서 양쪽 공백 제거

print("-----🌷---------🌷---------🌷------")
print("-----🌷-------🌷---------🌷--------")


# 예제4
with open('./resource/review.txt', 'r') as f:
    content = f.read()
    print(">", content)
    content = f.read()  # 내용 없음
    print(">", content)

print("-----🌻---------🌻---------🌻------")
print("-----🌻-------🌻---------🌻--------")


# 예제5
with open('./resource/review.txt', 'r') as f:
    line = f.readline()
    # print(line)
    while line:  # line 이 null 이 될 때까지
        print(line, end='#### ')  # 한문장씩
        line = f.readline()

print()
print("-----🍁---------🍁---------🍁------")
print("-----🍁-------🍁---------🍁--------")


# 예제6
with open('./resource/review.txt', 'r') as f:
    contents = f.readlines()
    print(contents)  # readlines는 \n 포함해서 리스트 형태로 가지고 있다
    for c in contents:
        print(c, end=' ****** ')

print()
print("-----🍡---------🍡---------🍡------")
print("-----🍡-------🍡---------🍡--------")


# 예제6
score = []
with open('./resource/score.txt', 'r') as f:
    for line in f:
        score.append(int(line))
    print(score)
    
print('Average : {:6.3}'.format(sum(score)/len(score)))


# 파일 쓰기

# 예제1
with open('./resource/text1.txt', 'w') as f:
    f.write('Seolyu!\n')


# 예제2
with open('./resource/text1.txt', 'a') as f:
    f.write('Lee!\n')


# 예제3
from random import randint

with open('./resource/text2.txt', 'w') as f:
    for cnt in range(6):
        f.write(str(randint(1, 50)))
        f.write('\n')


# 예제4
# writelines : 리스트 -> 파일로 저장
with open('./resource/text3.txt', 'w') as f:
    list = ['Lee\n', 'Kim\n', 'Son\n']
    f.writelines(list)


# 예제5
with open('./resource/text4.txt', 'w') as f:
    print('Test Contents1!', file=f)
    print('Test Contents2!', file=f)