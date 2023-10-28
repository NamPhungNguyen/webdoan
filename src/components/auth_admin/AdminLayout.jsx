
import React, { useState } from 'react';
import './adminLayout.scss'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    LineChartOutlined
} from '@ant-design/icons';



import { Layout, Menu, Button, theme, Row, Col, Avatar } from 'antd';
const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedNav, setSelectedNav] = useState('1');
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    selectedKeys={[selectedNav]} // Chọn nav tương ứng với selectedNav
                    onClick={({ key }) => setSelectedNav(key)} // Xử lý sự kiện click để cập nhật selectedNav
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <LineChartOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Row>
                        <Col md={18}>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                        </Col>
                        <Col md={6}>
                            <div>
                                <Avatar size='default' icon={<UserOutlined />}></Avatar> Admin
                            </div>
                        </Col>
                    </Row>

                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {selectedNav === '1' && <div>Content for nav 1</div>}
                    {selectedNav === '2' && <div>Hello</div>}
                    {selectedNav === '3' && <div>Content for nav 3</div>}
                </Content>

            </Layout>
        </Layout>
    );
};

export default AdminLayout;
