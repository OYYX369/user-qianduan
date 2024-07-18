import React from 'react';
import {Image, Space, Switch} from 'antd';

const App: React.FC = () => (
  <Space direction="vertical">
    <a href="https://yuyues.hnmuseum.com/w/home?stack-key=d0e94010">点击这里访问页面买票</a>
    <Image src="http://blog.ousir.icu/wp-content/uploads/2024/06/1718461446687.png" width={500} />
    <Switch checkedChildren="买票" unCheckedChildren="未买票" defaultChecked />

  </Space>
);

export default App;
