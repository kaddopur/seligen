import React from 'react';
import { Form, Select } from 'antd';

const { OptGroup, Option } = Select;

const mountGroups = [
  {
    name: 'Canon',
    mounts: ['EF', 'RF', 'EF-M']
  },
  {
    name: 'Nikon',
    mounts: ['S', 'F', '1']
  },
  {
    name: 'Four Thirds',
    mounts: ['Four Thirds']
  },
  {
    name: 'Sony',
    mounts: ['A', 'E']
  }
];

const MountField = () => {
  return (
    <Form.Item label="Mount">
      <Select showSearch style={{ width: 200 }}>
        {mountGroups.map((group, groupIndex) => (
          <OptGroup key={groupIndex} label={group.name}>
            {group.mounts.map((mount, mountIndex) => (
              <Option key={mountIndex} value={mount}>
                {mount}
              </Option>
            ))}
          </OptGroup>
        ))}
      </Select>
    </Form.Item>
  );
};

export default MountField;
