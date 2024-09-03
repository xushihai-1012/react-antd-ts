import React, { Suspense, lazy } from 'react'
import { ConfigProvider, Spin } from 'antd'
import zhCN from "antd/locale/zh_CN";
import useGlobalStore from "@/stores/global";
import './App.css'

const BasicLayout = lazy(() => import("./layout/index"))

const App: React.FC = () => {
  // const [count, setCount] = useState(0)
  const { primaryColor } = useGlobalStore();
  return (
    <>
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: primaryColor,
          },
        }}
      >
        <Suspense fallback={<Spin size="large" className="globa_spin" />}>
          <BasicLayout />
        </Suspense>
      </ConfigProvider>
    </>
  )
}

export default App
