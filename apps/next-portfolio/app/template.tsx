import { ReactNode } from 'react';
import { LayoutNavbar } from './components/layout';

type MainLayoutProps = {
  children?: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      {/* <LayoutNavbar /> */}
      {children}
      <div className="pt-32" />
    </div>
  );
};

export default MainLayout;
