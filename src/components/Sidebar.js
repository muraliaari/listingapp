import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Signup from '../pages/Signup';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem(<><Link to={"/signup"}>Signup</Link></>, '1', <DesktopOutlined />),
    getItem(<><Link to={"/login"}>Login</Link></>, '2', <DesktopOutlined />),
    
  ];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
  return (
    <div><Layout
    style={{
      minHeight: '100vh',
    }}
  >
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
    <Layout className="site-layout">
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      />
      
      
    </Layout>
  </Layout></div>
  )
}

export default Sidebar