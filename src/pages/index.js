import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import CameraForm from '../components/CameraForm';

import { LensProvider } from '../contexts/lensContext';

const { Header, Content, Footer } = Layout;

const IndexPage = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">鏡頭</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <LensProvider>
          <Row>
            <Col span={12}>
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <CameraForm />
              </div>
            </Col>
            <Col span={12}>col-12</Col>
          </Row>
        </LensProvider>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export default IndexPage;
