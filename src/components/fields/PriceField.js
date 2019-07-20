import React from 'react';
import { Form, InputNumber } from 'antd';
import { useLens } from '../../contexts/lensContext';

const PriceField = () => {
  const [price, setPrice] = useLens();

  return (
    <Form.Item label="Price">
      <InputNumber style={{ width: '100%' }} min={0} value={price} onChange={value => setPrice(value)} />
    </Form.Item>
  );
};

export default PriceField;
