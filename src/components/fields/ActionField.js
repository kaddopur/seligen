import React, { useCallback } from 'react';
import { Form, Radio } from 'antd';
import { useLensState, useLensDispatch, updateAction } from '../../contexts/lensContext';

const ActionField = () => {
  const { action } = useLensState();
  const dispatch = useLensDispatch();
  const handleActionChange = useCallback(e => updateAction(dispatch, e.target.value), [dispatch]);

  return (
    <Form.Item label="Action">
      <Radio.Group value={action} onChange={handleActionChange}>
        <Radio.Button value="sell">售</Radio.Button>
        <Radio.Button value="buy">徵</Radio.Button>
      </Radio.Group>
    </Form.Item>
  );
};

export default ActionField;
