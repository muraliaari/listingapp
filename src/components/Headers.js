import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom'
const { Header, Content, Footer } = Layout;


const Headers = () => {
  const item1 = [{
    key:1,
    label: <Link to="/listing">listing</Link>,
  },
  {
    key:2,
    label: <Link to="/signup">Signup</Link>,
  },
  {
    key:3,
    label: <Link to="/">Home</Link>,
  },
  
]
  return (
    <div>
      <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={item1}
      />
    </Header>
   
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
    
    </Footer>
  </Layout>
    </div>
  )
}

export default Headers