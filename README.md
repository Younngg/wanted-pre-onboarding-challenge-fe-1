# 원티드 프리온보딩 챌린지

## 📚 사용 기술

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## 📌 요구 사항

### Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발
- 이메일과 비밀번호의 유효성을 확인
  - 이메일 조건 : 최소 `@`, `.` 포함
  - 비밀번호 조건 : 8자 이상 입력
  - 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동
  - 응답으로 받은 토큰은 로컬 스토리지에 저장
  - 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트
  - 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트

### Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현
  - 목록 / 상세 영역으로 나누어 구현
  - Todo 목록을 볼 수 있습니다.
  - Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인
  - 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현

  - 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## ✨ 시연 영상

### 1. Sign Up / Login

![login](https://user-images.githubusercontent.com/98656282/211952321-d6784083-d3cf-4fd0-955e-fc11d0a4cc6b.gif)

### 2. Todo

![todo](https://user-images.githubusercontent.com/98656282/211952335-64d8355f-10cc-4a11-a3ac-0b3b243ca194.gif)

## 👨‍💻 실행 방법

해당 레퍼지토리를 clone 후

```
cd server
yarn
yarn start # http://localhost:8080

cd ../client
yarn
yarn start
```
