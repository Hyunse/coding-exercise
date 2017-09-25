LocalStorage , SessionStorage 
=============================

### localStorage : 로컬에 origin 별로 지속되는 스토리지

### sessionStorage : 현재 세션 동안만 유지되는 스토리지


- length: 읽기 전용 현재 Storage의 길이

- key(int): 해당 인덱스 위치에 있는 문자열 키 값을 리턴

- getItem(key): 해당 키 값에 해당하는 정보(문자열)을 리턴

- setItem(key, value): 해당 키 값에 대하여 해당 값을 설정

- removeItem(key): 해당 키 값의 값을 삭제

- clear(): Storage 전체 내용을 삭제
