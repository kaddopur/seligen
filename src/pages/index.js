import React from 'react';
import { Layout, Row, Col } from 'antd';
import LensForm from '../components/lens/LensForm';
import LensPttView from '../components/lens/views/LensPttView';

import { LensProvider } from '../contexts/lensContext';

const { Content } = Layout;

const IndexPage = () => {
  return (
    <Layout>
      <Content>
        <LensProvider>
          <Row>
            <Col span={12}>
              <LensForm />
            </Col>

            <Col span={12}>
              <LensPttView />
            </Col>
          </Row>
        </LensProvider>
      </Content>
    </Layout>
  );
};

export default IndexPage;
