import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import Home from './pages/Home';
import UserCenter from './pages/UserCenter';

const { Header, Content } = Layout;

const StyledHeader = styled(Header)`
  background: #fff;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StyledContent = styled(Content)`
  min-height: calc(100vh - 64px);
  background: #f0f2f5;
`;

const App = () => {
  return (
    <Router>
      <Layout>
        <StyledHeader>
          <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/user">用户中心</Link>
            </Menu.Item>
          </Menu>
        </StyledHeader>
        <StyledContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserCenter />} />
          </Routes>
        </StyledContent>
      </Layout>
    </Router>
  );
};

export default App;