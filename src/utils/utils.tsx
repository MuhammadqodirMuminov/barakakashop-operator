import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
export interface Item {
  label: string;
  key: string;
  icon: any;
  children: ReactNode;
}

const getItem = (label: string, key: string, icon: any, children: ReactNode) => ({
  key,
  icon,
  label,
  children,
});

export const generateAllMenuItems = (list: any) =>
  list?.map((item: any) =>
    getItem(
      item.label,
      item.key,
      (item.icon && item.icon) || undefined,
      (item.children && generateAllMenuItems(item.children)) || undefined,
    ),
  );

export const generateBreadcrumbItems = (breadcrumbs: any) => {
  const newBreadcrumbs = [];

  for (const item of breadcrumbs) {
    if (item.link) {
      newBreadcrumbs.push({
        title: <Link to={item.link}>{item.label}</Link>,
      });
    } else {
      newBreadcrumbs.push({ title: item.label });
    }
  }

  return newBreadcrumbs;
};
