import React from 'react';
import { Form, InputNumber } from 'antd';

const PriceField = () => {
  return (
    <Form.Item label="Price">
      <InputNumber
        style={{ width: '100%' }}
        min={0}
        formatter={value => `NT$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/NT\$\s?|(,*)/g, '')}
      />
    </Form.Item>
  );
};

export default PriceField;
