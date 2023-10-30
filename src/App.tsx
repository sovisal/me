import React, { useState } from 'react';
import './App.css';
import AppRouter from './Router';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, ConfigProvider } from "antd";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token
                    borderRadius: 4,

                    // Alias Token
                },
            }}
        >
            <Layout>
                <Sider
                    style={{
                        overflow: "auto",
                        height: "100vh",
                        position: "fixed",
                        left: 0,
                        top: 0,
                        bottom: 0,
                    }}
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                >
                    <div className="brand-logo">
                        <div className="bg-gray-500 py-4 m-2 mb-4 rounded"></div>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        items={[
                            {
                                key: "1",
                                icon: <UserOutlined />,
                                label: "nav 1",
                            },
                            {
                                key: "2",
                                icon: <VideoCameraOutlined />,
                                label: "nav 2",
                            },
                            {
                                key: "3",
                                icon: <UploadOutlined />,
                                label: "nav 3",
                            },
                        ]}
                    />
                </Sider>
                <Layout
                    className="site-layout"
                    style={{
                        height: "100vh",
                        transition: 'all 0.2s,background 0s',
                        marginLeft: collapsed ? 80 : 200,
                    }}
                >
                    <Header
                        className="py-0 px-4 h-12 flex items-center"
                        style={{ background: colorBgContainer }}
                    >
                        <Button
                            type="text"
                            icon={ collapsed ? ( <MenuUnfoldOutlined /> ) : ( <MenuFoldOutlined /> ) }
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                
                            }}
                        />
                    </Header>
                    <Content
                        style={{
                            padding: '.8rem 1rem',
                            minHeight: 'calc(100vh - 48px)',
                        }}
                    >
                        <AppRouter />
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default App;
