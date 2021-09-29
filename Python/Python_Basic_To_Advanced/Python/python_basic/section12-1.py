# Section12-1
# 파이썬 데이터베이스 연동(SQLite)
# 테이블 생성 및 삽입

import sqlite3
import datetime

# 삽입 날짜 생성
now = datetime.datetime.now()
print('now : ', now)

print()

nowDatetime = now.strftime('%Y-%m-%d %H:%M:%S')
print('nowDatetime : ', nowDatetime)

print()

# sqlite3
print('sqlite3.version : ', sqlite3.version)
print('sqlite3.sqlite_version : ', sqlite3.sqlite_version)

print()

# DB 생성 & Auto Commit(Rollback)
conn = sqlite3.connect('C:/Users/seoly/Desktop/GITHUB/seol-yu/TIL/Python/Python_Basic_To_Advanced/Python/python_basic/resource/database.db', isolation_level=None)
# SQLiteDatabaseBrowserPortable 로 열기

# Cursor
c = conn.cursor()
print('Cursor Type : ', type(c))

# 테이블 생성(Data Type : TEXT, NUMERIC, INTEGER, REAL, BLOB)
c.execute("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, username text, email text, \
phone text, website text, regdate text)")

# 데이터 삽입
c.execute("INSERT INTO users VALUES(1, 'Kim', 'KIM@naver.com', '010-0000-0000', \
    'Kim.com', ?)", (nowDatetime,))
c.execute("INSERT INTO users(id, username, email, phone, website, regdate) VALUES (?,?,?,?,?,?)", (2, 'Lee', 'lee@daum.net', '010-0000-0000', 'lee.com', nowDatetime))

# Many 삽입(튜플, 리스트)
userList = (
    (3, 'Lee', 'Lee@naver.com', '010-0000-0000', 'Lee.com', nowDatetime),
    (4, 'Son', 'Son@naver.com', '010-0000-0000', 'Son.com', nowDatetime),
    (5, 'Jin', 'Jin@naver.com', '010-0000-0000', 'Jin.com', nowDatetime),
)

c.executemany("INSERT INTO users(id, username, email, phone, website, regdate) \
    VALUES (?,?,?,?,?,?)", userList)

# 테이블 데이터 삭제
# conn.execute("DELETE FROM users")
# print("users db deleted : ", conn.execute("DELETE FROM users").rowcount)

# 커밋 : isolation_level = None 일 경우 자동 반영(오토 커밋)
# conn.commit()

# 롤백
# conn.rollback()

# 접속 해제
conn.close()