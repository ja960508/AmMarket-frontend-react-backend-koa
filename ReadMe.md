# 암마켓

## 프로젝트 개요

    간단한 쇼핑 앱입니다. 상품 등록, 수정, 삭제 기능 및 auth 기능을 구현했습니다.

    프론트엔드는 리액트, 백엔드는 koa 프레임워크와 mongoDB를 이용해 구현했습니다.

## 기술 스택

- react
- react router v6
- koa
- postCSS
- redux
- redux saga
- redux actions
- qs

## Auth

설계 순서는 다음과 같습니다.

1. 유저 모델 생성
2. 각각의 기능에 맞게 koa-router 라우팅 설정
3. jwt 발급

JSON Web Token을 이용해 유저의 인증 정보를 유지합니다. 회원가입 또는 로그인 시 토큰을 발급해, 쿠키의 access_token이라는 이름으로 저장합니다.

새로고침 또는 재방문 시 남아있는 access_token을 decoding해 유저의 정보를 다시 확인합니다.

해당 과정을 통해 유저 정보를 유지할 수 있습니다.

---

<br />

## CRUD

설계는 auth와 비슷한 순서를 가집니다.

1. product 모델 생성
2. 각 기능을 위한 REST API 설계 및 라우팅
3. 기능에 따라 유저 권한 확인(로그인 중인지, 해당 상품의 작성자인지)
   - 미들웨어를 등록해 구현했습니다.
4. 기능 수행 또는 오류 처리

---

<br />

## pagenation

백엔드에서 등록된 레코드들의 수를 계산해 last-page를 response 헤더에 포함하여 반환합니다.

해당 값을 프론트에서 사용하여 클라이언트가 쿼리에 페이지를 등록하여 요청 시 옳은 값인지 판단합니다.

쿼리로 들어간 값은 백에서 document slicing을 위해 사용합니다.

---

<br />

## 회고

해당 프로젝트에서는 최적화에 대한 부분을 전혀 고려하지 않았습니다. 아직 최적화에 대해 완전히 체득하지 못했다고 생각하여 차용하지 못했습니다.

초반 프로젝트 진행 시 기능이 확립되지 않아 코드가 조금 지저분합니다. 설계를 탄탄하게 진행했다면 재사용 가능한 코드가 더욱 많아졌을 것 같습니다.

백엔드와 프론트엔드의 연결, 페이지네이션, CRUD 등 기본기가 되는 기능들을 구현하는 좋은 프로젝트 경험이었습니다.
