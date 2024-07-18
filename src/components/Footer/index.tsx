import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
import { PLANET_LINK } from '@/constants';

const Footer: React.FC = () => {
  const defaultMessage = '湖南博物出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '知识星球',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '欧sir博客',
          href: 'http://blog.ousir.icu/',
          blankTarget: true,
        },
        {
          key: 'ousir--github',
          title: (
            <>
              <GithubOutlined /> GitHub
            </>
          ),
          href: 'https://github.com/OYYX369',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
