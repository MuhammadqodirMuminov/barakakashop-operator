// import { breadcrumbSelector } from '@/store';
import { generateBreadcrumbItems } from '@/utils/utils';
import { RightOutlined } from '@ant-design/icons';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
// import { useSelector } from 'react-redux';

export const Breadcrumb = () => {
  // const { breadcrumbs } = useSelector(breadcrumbSelector);

  const items = generateBreadcrumbItems([]);

  return <AntdBreadcrumb key="title" separator={<RightOutlined />} items={items} />;
};
