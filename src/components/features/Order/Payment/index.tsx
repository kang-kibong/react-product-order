import React from 'react';
import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';
import { Button } from '@components/common';
import ReceiptForm from './ReceiptForm';
import { validatePayment } from './validation';

export default function Payment() {
  const { watch } = useFormContext();
  const { message, hasCashReceipt, cashReceiptNumber } = watch();

  const handleOrderClick = () => {
    const errorMessage = validatePayment(message, hasCashReceipt, cashReceiptNumber);
    if (errorMessage) return alert(errorMessage);
    return alert('주문이 완료되었습니다.');
  };

  return (
    <PaymentContainer>
      <Title>결제정보</Title>
      <ReceiptForm />
      <TotalAmount>
        <dl>
          <dt>최종 결제금액</dt>
          <dd>49900원</dd>
        </dl>
      </TotalAmount>
      <Button theme="kakao" onClick={handleOrderClick}>
        49900원 결제하기
      </Button>
    </PaymentContainer>
  );
}

const PaymentContainer = styled.aside`
  width: 360px;
`;

const Title = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const TotalAmount = styled.div`
  padding: 18px 20px;
  border-radius: 4px;
  background-color: rgb(245, 245, 245);
  margin-bottom: 20px;

  dl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
  }

  dt {
    font-size: 14px;
  }

  dd {
    font-size: 20px;
  }
`;
