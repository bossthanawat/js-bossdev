import { ReactNode } from 'react';

type MainLayoutProps = {
  children?: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      {children}
      <div className="pt-32" />
    </div>
  );
};

export default MainLayout;
