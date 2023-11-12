import Link, { LinkProps } from 'next/link';

const LayoutNavbar = () => {
  return (
    <>
      <div className="sticky top-0 bg-white/40 backdrop-blur-sm">
        <div className="container flex justify-between items-center py-4">
          <Link className="font-bold text-lg" href={'/'}>
            THANAWAT.K
          </Link>
          <div className="flex gap-6">
            <LinkTypography href="/">About</LinkTypography>
            <LinkTypography href="https://medium.com/@boss41680">
              Blog
            </LinkTypography>
            <LinkTypography href="https://github.com/bossthanawat">
              Git
            </LinkTypography>
            <LinkTypography href="/">Contact</LinkTypography>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutNavbar;

const LinkTypography = ({
  href,
  children,
}: {
  children: React.ReactNode;
} & LinkProps) => {
  return (
    <Link className="font-medium hover:opacity-70" href={href}>
      {children}
    </Link>
  );
};