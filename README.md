# 모코코딩 프론트 개발과제
## 개요 및 목표
- 각 참여자들의 프론트엔드 입문을 위한 개발과제
- 개발과제용으로 만들어져있는 백엔드 서버를 사용해서 웹 앱 개발
- 실습한 내용 기록을 위한 저장소
- [백엔드 서버 저장소](https://github.com/Mokocoding/licking-api)
- [백엔드 서버 개발자(rrgks6221) 깃허브](https://github.com/rrgks6221)

## 전략
- 현재 레포지토리에서 참여자별로 각자 Fork 해서 진행
    - [정비호]()
    - [정재균]()
    - [원동건]()
- 각 참여자 레포지토리의 develop 브랜치에서 작업
- 메인 레포지토리의 각 참여자 이름으로 생성된 브랜치에 병합

## API 명세


### 게시글 전체 조회 
- URL : /api/posts
- Method : GET
- Headers : "Content-type" : "application/json; charset=utf-8"
- Response
    - Status : 200
        ```
        {
            "posts": [
                {
                "id": 0,
                "title": "string",
                "description": "string",
                "createdAt": "2023-07-07T04:54:59.453Z",
                "updatedAt": "2023-07-07T04:54:59.453Z"
                }
            ]
        }
        ```
---
### 게시글 단일 조회
- URL : /api/posts/{id} (id:number = 게시글 고유 ID)
- Method : GET
- Headers : "Content-type" : "application/json; charset=utf-8"
- Response
    - Status : 200
        ```
        {
            "post": {
                "id": 0,
                "title": "string",
                "description": "string",
                "createdAt": "2023-07-07T04:59:34.130Z",
                "updatedAt": "2023-07-07T04:59:34.130Z"
            }
        }
        ```
---
### 게시글 생성
- URL : /api/posts
- Method : POST
- Headers : "Content-type" : "application/json; charset=utf-8"
- Request body 
    ```
    {
        title : "string",
        description: "string"
    }
    ```
- Response
    - Status : 201
        ```
        {
            "post": {
                "id": 0,
                "title": "string",
                "description": "string",
                "createdAt": "2023-07-07T04:54:59.453Z",
                "updatedAt": "2023-07-07T04:54:59.453Z"
            }
        }
        ```
---
### 게시글 수정
- URL : /api/posts/{id} (id:number = 게시글 고유 ID)
- Method : PATCH
- Headers : "Content-type" : "application/json; charset=utf-8"
- Request body 
    ```
    {
        title: "string",
        description: "string"
    }
    ```
- Response
    - Status : 200
        ```
        {
            "post": {
                "id": 0,
                "title": "string",
                "description": "string",
                "createdAt": "2023-07-07T04:54:59.453Z",
                "updatedAt": "2023-07-07T04:54:59.453Z"
            }
        }
        ```
---
### 게시글 삭제
- URL : /api/posts/{id} (id:number = 게시글 고유 ID)
- Method : DELETE
- Headers : "Content-type" : "application/json; charset=utf-8"
