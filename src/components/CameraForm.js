import React from 'react';
import { Form } from 'antd';

import LensField from './fields/LensField';
import PriceField from './fields/PriceField';

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
      <LensField form={form} />
      <PriceField form={form} />
    </Form>
  );
};

export default Form.create({ name: 'camera' })(CameraForm);
