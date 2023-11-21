import Link, { LinkProps } from 'next/link';
import { PAGE_PATH } from '../../lib/constants';

const LayoutNavbar = () => {
  return (
    <>
      <div className="sticky top-0 bg-white/40 backdrop-blur-sm">
        <div className="container flex justify-between items-center py-4">
          <Link className="font-bold text-lg" href={'/'}>
            THANAWAT.K
          </Link>
          <div className="flex gap-6">
            <LinkTypography href={PAGE_PATH.ABOUT}>About</LinkTypography>
            <LinkTypography href={PAGE_PATH.OUT_PATH.BLOG_MEDIUM} newTab>
              Blog
            </LinkTypography>
            <LinkTypography href={PAGE_PATH.OUT_PATH.GITHUB} newTab>
              Git
            </LinkTypography>
            <LinkTypography href={PAGE_PATH.CONTACT}>Contact</LinkTypography>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutNavbar;

const LinkTypography = ({
  href,
  newTab,
  children,
}: {
  newTab?: boolean;
  children: React.ReactNode;
} & LinkProps) => {
  return (
    <Link
      className="font-medium hover:opacity-70"
      href={href}
      rel={newTab ? 'noopener noreferrer' : undefined}
      target={newTab ? '_blank' : undefined}
    >
      {children}
    </Link>
  );
};
