# Section11
# 파이썬 외부 파일 처리
# 파이썬 Excel, CSV 파일 읽기 및 쓰기

# CSV : MIME - text/csv

import csv

# 예제1
with open('./resource/sample1.csv', 'r') as f:
    reader = csv.reader(f)  # 구분자가 , 일 때 
    # next(reader)  # Header 스킵
    # 확인
    print(reader)
    print(type(reader))
    print(dir(reader))

    for c in reader:
        print(c)

print()

# 예제2
with open('./resource/sample2.csv', 'r') as f:
    reader = csv.reader(f, delimiter='|')  # 구분자가 | 일 때 
    # next(reader)  # Header 스킵
    # 확인
    print(reader)
    print(type(reader))
    print(dir(reader))

    for c in reader:
        print(c)

print()

# 예제3 (Dict변환)
with open('./resource/sample1.csv', 'r') as f:
    reader = csv.DictReader(f)

    for c in reader:
        for k, v in c.items():
            print(k, v)
        print('-----------------------')

print()

# 예제4
w = [[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18]]

with open('./resource/sample3.csv', 'w', newline='') as f:
    wt = csv.writer(f)

    for v in w:  # 하나하나 검증할 땐 이렇게
        wt.writerow(v)

print()

# 예제5
with open('./resource/sample4.csv', 'w', newline='') as f:
    wt = csv.writer(f)
    wt.writerows(w)  # 검증 끝난 데이터. 다 쓸 땐

print()

# XSL, XLSX
# https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_excel.html
# openpyxl, xlsxwriter, xlrd, xlwt, xlutils
# pandas 를 주로 사용(openpyxl, xlrd)
# 가상환경에서
# pip install xlrd
# pip install openpyxl
# pip install pandas

import pandas as pd

# sheetname='시트명' 또는 숫자, header=숫자, skiprow=숫자
xlsx = pd.read_excel('./resource/sample.xlsx')

# 상위 데이터 확인
print(xlsx.head())  # 첫번째부터 5번째까지
print()

# 데이터 확인
print(xlsx.tail())  # 끝에 5개

print()

# 데이터 확인
print(xlsx.shape)  # 행, 열

# 엑셀 or CSV 다시 쓰기
xlsx.to_excel('./resource/result.xlsx', index=False)
xlsx.to_csv('./resource/result.csv', index=False)