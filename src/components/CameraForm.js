import React from 'react';
import { Form, Radio, DatePicker } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_TW';

const { MonthPicker } = DatePicker;

import LensField from './fields/LensField';
import PriceField from './fields/PriceField';
import ActionField from './fields/ActionField';
import LocationField from './fields/LocationField';

const CameraForm = props => {
  const { form } = props;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 }
    }
  };

  return (
    <Form {...formItemLayout}>
      <ActionField form={form} />
      <LocationField form={form} />
      <LensField form={form} />
      <PriceField form={form} />

      <Form.Item label="Date">
        <MonthPicker placeholder="Select month" locale={locale} />
      </Form.Item>

      <Form.Item label="Box">
        <div>
          <Radio.Group defaultValue="1">
            <Radio.Button value="1">公司貨</Radio.Button>
            <Radio.Button value="2">水貨</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: 16 }}>
          <Radio.Group defaultValue="1">
            <Radio.Button value="1">保內</Radio.Button>
            <Radio.Button value="2">過保</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: 16 }}>
          <Radio.Group defaultValue="1">
            <Radio.Button value="1">有盒</Radio.Button>
            <Radio.Button value="2">無盒</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: 16 }}>
          <Radio.Group defaultValue="1">
            <Radio.Button value="1">有單</Radio.Button>
            <Radio.Button value="2">無單</Radio.Button>
          </Radio.Group>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: 'camera' })(CameraForm);
