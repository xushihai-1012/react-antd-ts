import React, { useState, Suspense } from 'react'
import { Breadcrumb, Layout, Menu, theme, MenuProps, Spin } from 'antd';
import { NonIndexRouteObject, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

// type RouteType = NonIndexRouteObject & {
//     title: string,
//     icon: React.ReactElement
// }

const BasicLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);



    // const getItems: any = (children: RouteType[]) => {
    //     return children.map((item) => {
    //         return {
    //             key: item.index
    //                 ? "/"
    //                 : item.path?.startsWith("/")
    //                     ? item.path
    //                     : `/${item.path}`,
    //             icon: item.icon,
    //             label: item.title,
    //             children: item.children ? getItems(item.children) : null,
    //         };
    //     });
    // };

    // const menuItems: MenuProps["items"] = getItems(
    //     routes[0].children![0].children.filter((item) => item.path !== "*")
    // );
    return (
        <Layout
            style={{ minHeight: '100vh' }}
        >
            <Sider
                style={{
                    overflow: "auto",
                    height: "100vh",
                }}
                collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                {/* <Menu
                    theme="dark" defaultSelectedKeys={['1']} mode="inline" items={MenuProps} /> */}
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: "colorBgContainer" }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }} items={[
                        { title: "首页" }, { title: "管理" }
                    ]}>
                        {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                    </Breadcrumb>
                    {/* <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Bill is a cat.
                    </div> */}
                    <Suspense fallback={<Spin size="large" className="content_spin" />}>
                        <Outlet />
                    </Suspense>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}

export default BasicLayout