import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '郴州市博物馆',
  pwa: false,
  logo: 'http://blog.ousir.icu/wp-content/uploads/2024/06/0317ec1578b90200000012e7e2fd5f0-e1718457643775.jpg',
  iconfontUrl: '',
};

export default Settings;
