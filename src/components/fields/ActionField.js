import React from 'react';
import { Form, Radio } from 'antd';

const ActionField = () => {
  return (
    <Form.Item label="Action">
      <Radio.Group defaultValue="sell">
        <Radio.Button value="sell">售</Radio.Button>
        <Radio.Button value="buy">徵</Radio.Button>
      </Radio.Group>
    </Form.Item>
  );
};

export default ActionField;
