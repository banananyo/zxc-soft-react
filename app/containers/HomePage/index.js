import React from 'react';
import zxcIcon from 'images/favicon.png';
import PageWrapper from 'components/Wrapper/PageWrapper';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Breadcrumb from 'antd/lib/breadcrumb';
const { Header, Content, Footer } = Layout;

function HomePage() {
  return (
    <PageWrapper>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <span>
                <img src={zxcIcon} alt="logo" style={{ height: '36px' }} />
              </span>
            </Menu.Item>
            <Menu.Item key="2">Home</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              background: '#fff',
              padding: 24,
              minHeight: 280,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <img src={zxcIcon} alt="logo" />
            <h3>This website is in </h3>
            <h1 style={{ color: 'red' }}>development.</h1>
            <h1>:D</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <span>zxc-soft.com ©2018 Developed by </span>
          <a href="https://www.facebook.com/Wazjakorn" target="_blank">
            Wazjakorn
          </a>
        </Footer>
      </Layout>
    </PageWrapper>
  );
}

export default HomePage;
