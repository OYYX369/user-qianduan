import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'更快更强的重型组件，已经发布。'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          高级表格{' '}
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            欢迎使用
          </a>
        </Typography.Text>
        <CodePreview>
          欢迎来到我们的项目平台！
          <br/>
          在这里，我们诚挚地邀请您一同探索湖南省博物馆的奥秘。
          <br/>
          作为湖南省的重要文化地标，湖南省博物馆珍藏了丰富的历史文物和艺术品，承载着湖湘文化的厚重底蕴。
          <br/>
          通过我们的项目，您将能够跨越时空的界限，领略到湖南地区悠久的历史和独特的文化魅力。
          <br/>
          我们致力于为您提供一个便捷、直观的平台，让您在轻松愉悦的氛围中感受中华文明的博大精深。期待您的加入，一同开启这段文化之旅！
        </CodePreview>
        <img
          src="http://blog.ousir.icu/wp-content/uploads/2024/06/R-C.jpeg"
          alt="湖南省博物馆图片"
          style={{marginLeft: 10}} // 根据需要调整图片与文本之间的距离
        />

        <br/><br/>
        <img
          src="http://blog.ousir.icu/wp-content/uploads/2024/06/R-C.jpg"
          alt="湖南省博物馆图片"
          style={{marginLeft: 10}} // 根据需要调整图片与文本之间的距离
        />
        <CodePreview>yarn add @ant-design/pro-layout</CodePreview>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
