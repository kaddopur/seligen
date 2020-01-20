import React, { useCallback } from 'react';
import { Form, InputNumber } from 'antd';
import { useLensState, useLensDispatch, updatePrice } from '../../contexts/lensContext';

const PriceField = () => {
  const { price } = useLensState();
  const dispatch = useLensDispatch();
  const handlePriceChange = useCallback(v => updatePrice(dispatch, v), [dispatch]);

  return (
    <Form.Item label="Price">
      <InputNumber style={{ width: '100%' }} min={0} value={price} onChange={handlePriceChange} />
    </Form.Item>
  );
};

export default PriceField;
