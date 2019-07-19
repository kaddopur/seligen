import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const PriceField = () => {
  return (
    <Form.Item label="Location">
      <Select mode="multiple" style={{ width: '100%' }} placeholder="Please select">
        <Option value="台北市">台北市</Option>
        <Option value="新北市">新北市</Option>
        <Option value="桃園市">桃園市</Option>
        <Option value="台中市">台中市</Option>
        <Option value="台南市">台南市</Option>
        <Option value="高雄市">高雄市</Option>
        <Option value="基隆市">基隆市</Option>
        <Option value="新竹市">新竹市</Option>
        <Option value="嘉義市">嘉義市</Option>
        <Option value="新竹縣">新竹縣</Option>
        <Option value="苗栗縣">苗栗縣</Option>
        <Option value="彰化縣">彰化縣</Option>
        <Option value="南投縣">南投縣</Option>
        <Option value="雲林縣">雲林縣</Option>
        <Option value="嘉義縣">嘉義縣</Option>
        <Option value="屏東縣">屏東縣</Option>
        <Option value="宜蘭縣">宜蘭縣</Option>
        <Option value="花蓮縣">花蓮縣</Option>
        <Option value="台東縣">台東縣</Option>
        <Option value="澎湖縣">澎湖縣</Option>
        <Option value="金門縣">金門縣</Option>
        <Option value="連江縣">連江縣</Option>
      </Select>
    </Form.Item>
  );
};

export default PriceField;
