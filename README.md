# 4️⃣ 4주차 상품 주문하기
## 📡 1단계 - 상품 상세 페이지 & 상품 결제하기 Form 구현하기
### ✅ 기능 목록
- [x] chakra-ui 설치
- [x] 상품 상세페이지 UI 구현
- [x] 상품 결제페이지 UI 구현
- [x] `/api/v1/products/{productId}/detail`에 대한 API 구현
- [x] `/api/v1/products/{productId}/options`에 대한 API 구현
- [x] 없는 상품의 경우 메인 페이지로 리다이렉트
- [x] 나에게 선물하기 버튼 클릭 시 로그인이 되어있지 않다면 로그인 페이지로 리다이렉트

## 👓 2단계 - validation 구현하기
### ✅ 기능 목록
- [x] 상품 상세 페이지에서 상품의 개수를 option API의 giftOrderLimit을 초과할 경우 선택 불가능하게 구현
- [x] 결제 페이지 Form validation 구현
  - [x] 카드 메시지를 입력하지 않으면 메시지 입력하도록 안내
  - [x] 카드 메시지가 100글자 넘을 경우 100자 이내로 입력하도록 안내
  - [x] 현금 영수증 checkbox 클릭시 현금영수증 번호가 입력되었는지 확인
  - [x] 현금 영수증 입력은 숫자만 입력하도록 안내

## 👓 3단계 - React Hook Form를 사용하여 기존의 form을 리팩터링 해요.
- [] 기존에 만든 form / input을 react-hook-form으로 변경
- [] validate 또한 react-hook-form 기능을 활용 (이 과정에서 zod를 사용해도 좋음.)