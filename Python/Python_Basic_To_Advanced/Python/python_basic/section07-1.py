# Section07-1
# 파이썬 클래스 상세 이해
# Self, 클래스, 인스턴스 변수

# 클래스, 인스턴스 차이 중요
# 네임스페이스 : 객체를 인스턴스화 할 때 저장된 공간
# 클래스 변수 : 직접 사용 가능, 객체보다 먼저 생성
# 인스턴스 변수: 변수마다 별도로 존재, 인스턴스 생성 후 사용

# 선언
# class 클래스명:
#     함수
#     함수
#     함수


# 예제1
class UserInfo:  # 첫글자 대문자
    # 속성(이름, 나이, 성별, 키, 몸무게, 주소 등등)
    # 메소드(움직임이 있는 것. 걷다 뛰다 등)
    def __init__(self, name):  # 클래스 초기화할 때 호출되는 함수
        self.name = name
    def user_info_p(self):
        print("Name : ", self.name)

# 네임스페이스 - 인스턴스가 가지고 있는 자기 자신의 저장 공간
# 아래 user1 과 user2 는 다르다
user1 = UserInfo("Lee")
print(user1.name)  # Lee
user1.user_info_p()  # Name :  Lee
user2 = UserInfo("Kim")
print(user2.name)  # Kim
user2.user_info_p()  # Name :  Kim

print(id(user1))        # 1804385471552 id는 메모리 주소값
print(id(user2))        # 1804385471456
print(user1.__dict__)   # {'name': 'Lee'} 네임스페이스 출력
print(user2.__dict__)   # {'name': 'Kim'}

print()

# 예제2
# self의 이해
class SelfTest:  # 괄호 있어도 됨
    def function1():  # 클래스 메소드. 여러 인스턴스가 공유하는 함수. 클래스 이름으로 호출해야함
        print('function1 called!')
    def function2(self):  # self가 있는 것은 인스턴스 메소드. 인스턴스 생성해서 호출하거나 클래스를 바로 호출하되 인자로 인스턴스를

        print(id(self))
        print('function2 called!')

self_test = SelfTest()      # self_test는 SelfTest()를 바탕으로 찍어낸 인스턴스
# self_test.function1()     # function1()은 self 인자가 없기 때문에 누구의 fuction1() 함수인지 모름. 에러
SelfTest.function1()        # function1 called! 클래스 메소드라서 클래스에서 호출해야함
self_test.function2()       # 2994336385536 \n function2 called!

print(id(self_test))  # 2994336385536
SelfTest.function2(self_test)  # 2994336385536 \n function2 called!

print()

# 예제3
# 클래스 변수, 인스턴스 변수

class WareHouse:
    # 클래스 변수(모든 인스턴스가 공유)
    # ex) 연봉인상율
    stock_num = 0
    def __init__(self, name):
        self.name = name
        WareHouse.stock_num += 1
    def __del__(self):
        WareHouse.stock_num -= 1


user1 = WareHouse('Lee')
user2 = WareHouse('Kim')
user3 = WareHouse('Son')

print(user1.__dict__)       # {'name': 'Lee'}
print(user2.__dict__)       # {'name': 'Kim'}
print(user3.__dict__)       # {'name': 'Son'}
print(WareHouse.__dict__)   # 클래스 네임스페이스, 클래스 변수(공유) ... 'stock_num': 3 

print(user1.name)  # Lee
print(user2.name)  # Kim
print(user3.name)  # Son

print()

# 인스턴스 네임스페이스에서 값이 없으면 클래스 네임스페이스에서 찾음.. 없으면 에러
print(user1.stock_num)  # 3
print(user2.stock_num)  # 3
print(user3.stock_num)  # 3

del user1

print(user2.stock_num)  # 2
print(user3.stock_num)  # 2