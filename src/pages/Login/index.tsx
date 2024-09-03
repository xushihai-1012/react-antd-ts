import { LoginFormPage, ProFormText, ProFormCaptcha, ProFormCheckbox } from "@ant-design/pro-components";
import { Button, Divider, Space, Tabs, message } from "antd";
import { AlipayOutlined, TaobaoOutlined, WeiboOutlined, UserOutlined, LockOutlined, MobileOutlined } from "@ant-design/icons";
import { useState, type CSSProperties } from "react";
// import styles from "./index.module.scss";

const iconStyles: CSSProperties = {
    color: "rgba(0, 0, 0, 0.2)",
    fontSize: "18px",
    verticalAlign: "middle",
    cursor: "pointer",
};

type LoginType = "account" | "phone";

const Login = () => {
    const [loginType, setLoginType] = useState<LoginType>("account")
    return (
        <div style={{
            backgroundColor: "white",
            height: "100vh"
        }}>
            <LoginFormPage
                backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
                title="react后台管理系统"
                subTitle="一个轻量级react后台管理系统"
                activityConfig={{
                    style: {
                        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
                        color: "#fff",
                        borderRadius: 8,
                        backgroundColor: "#1677FF",
                    },
                    title: "活动标题，可配置图片",
                    subTitle: "活动介绍说明文字",
                    action: (
                        <Button
                            size="large"
                            style={{
                                borderRadius: 20,
                                background: "#fff",
                                color: "#1677FF",
                                width: 120,
                            }}
                        >
                            去看看
                        </Button>
                    ),
                }}
                actions={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <Divider plain>
                            <span
                                style={{ color: "#CCC", fontWeight: "normal", fontSize: 14 }}
                            >
                                其他登录方式
                            </span>
                        </Divider>
                        <Space align="center" size={24}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    height: 40,
                                    width: 40,
                                    border: "1px solid #D4D8DD",
                                    borderRadius: "50%",
                                }}
                            >
                                <AlipayOutlined style={{ ...iconStyles, color: "#1677FF" }} />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    height: 40,
                                    width: 40,
                                    border: "1px solid #D4D8DD",
                                    borderRadius: "50%",
                                }}
                            >
                                <TaobaoOutlined style={{ ...iconStyles, color: "#FF6A10" }} />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    height: 40,
                                    width: 40,
                                    border: "1px solid #D4D8DD",
                                    borderRadius: "50%",
                                }}
                            >
                                <WeiboOutlined style={{ ...iconStyles, color: "#333333" }} />
                            </div>
                        </Space>
                    </div>
                }
            >
                <Tabs
                    centered
                    activeKey={loginType}
                    onChange={(activeKey) => setLoginType(activeKey as LoginType)}
                    items={[{ key: "account", label: "账号密码登录" }, { key: "phone", label: "手机号登录" }]}
                >
                </Tabs>
                {loginType === "account" && (
                    <>
                        <ProFormText
                            fieldProps={{
                                size: "large",
                                prefix: <UserOutlined className={"prefixIcon"} />,
                            }}
                            placeholder={"用户名: admin or user"}
                            rules={[
                                {
                                    required: true,
                                    message: "请输入用户名!",
                                },
                            ]}
                        />
                        <ProFormText.Password
                            name="password"
                            fieldProps={{
                                size: "large",
                                prefix: <LockOutlined className={"prefixIcon"} />,
                            }}
                            placeholder={"密码: 123456"}
                            rules={[
                                {
                                    required: true,
                                    message: "请输入密码！",
                                },
                            ]}
                        />
                    </>
                )}
                {loginType === "phone" && (
                    <>
                        <ProFormText
                            fieldProps={{
                                size: "large",
                                prefix: <MobileOutlined className={"prefixIcon"} />,
                            }}
                            name="mobile"
                            placeholder={"手机号"}
                            rules={[
                                {
                                    required: true,
                                    message: "请输入手机号！",
                                },
                                {
                                    pattern: /^1\d{10}$/,
                                    message: "手机号格式错误！",
                                },
                            ]}
                        />
                        <ProFormCaptcha
                            fieldProps={{
                                size: "large",
                                prefix: <LockOutlined className={"prefixIcon"} />,
                            }}
                            captchaProps={{
                                size: "large",
                            }}
                            placeholder={"请输入验证码"}
                            captchaTextRender={(timing, count) => {
                                if (timing) {
                                    return `${count}秒后获取验证码`;
                                }
                                return "获取验证码";
                            }}
                            name="captcha"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入验证码！",
                                },
                            ]}
                            onGetCaptcha={async () => {
                                message.success("获取验证码成功！验证码为：1234");
                            }}
                        />
                    </>
                )}
                <div
                    style={{
                        marginBlockEnd: 24,
                    }}
                >
                    <ProFormCheckbox noStyle name="autoLogin">
                        自动登录
                    </ProFormCheckbox>
                    <a
                        style={{
                            float: "right",
                        }}
                    >
                        忘记密码
                    </a>
                </div>
            </LoginFormPage>
        </div>
    )
}

export default Login