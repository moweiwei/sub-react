import React, { useEffect } from 'react';

import { Divider, Modal } from 'antd';

import 'antd/dist/antd.min.css';
import './App.css';

import LibVersion from './components/LibVersion';
import HelloModal from './components/HelloModal';

export default function App(props) {
  useEffect(() => {
    // 注册一个观察者函数
    props?.store?.onGlobalStateChange?.((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      Modal.confirm({
        title: '主应用数据变化了',
        content: `主应用改变后的数据为：${JSON.stringify(state)}`,
      });
    });
  }, [props?.store]);

  return (
    <div className="app-main">
      <LibVersion />
      <HelloModal />
      <Divider />
    </div>
  );
}
