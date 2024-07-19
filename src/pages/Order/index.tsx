import React, { useState } from 'react';
import styled from '@emotion/styled';
import Layout from '@components/features/Layout';
import { CenteredContainer } from '@components/common';
import OrderMessage from '@components/features/Order/OrderMessage';
import Payment from '@components/features/Order/Payment';

export default function Order() {
  const [orderData, setOrderData] = useState({
    message: '',
    hasCashRecipt: false,
    cashReciptType: '개인소득공제',
    cashReciptNumber: '',
  });

  const handleOrderDataChange = (name: string, value: any) => {
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Layout>
      <CenteredContainer maxWidth="lg">
        <InnerContainer>
          <OrderMessage message={orderData.message} onMessageChange={handleOrderDataChange} />
          <Payment
            message={orderData.message}
            hasCashRecipt={orderData.hasCashRecipt}
            cashReciptType={orderData.cashReciptType}
            cashReciptNumber={orderData.cashReciptNumber}
            onInputChange={handleOrderDataChange}
          />
        </InnerContainer>
      </CenteredContainer>
    </Layout>
  );
}

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
  height: 100vh;
`;
