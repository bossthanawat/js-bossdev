'use client';
import Link, { LinkProps } from 'next/link';
import { PAGE_PATH } from '../../lib/constants';
import { motion } from 'framer-motion';
import { cn } from '@js-bossdev/components';
import { ClassValue } from 'clsx';

const LayoutNavbar = () => {
  return (
    <>
      <div className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
        <nav aria-label="Main navigation">
          <div className="flex flex-col justify-between rounded-b-lg px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl bg-white/80 backdrop-blur-sm drop-shadow-sm border-2">
            <Link className="font-bold text-lg" href={'/'}>
              Thanawat.K
            </Link>
            <div className="relative flex gap-3 items-center">
              <LinkTypography href={PAGE_PATH.ABOUT}>About</LinkTypography>
              <LinkTypography href={PAGE_PATH.OUT_PATH.BLOG_MEDIUM} newTab>
                Blog
              </LinkTypography>
              <div className="rounded-md border-2 border-slate-900 hover:scale-105 ml-3">
                <LinkTypography
                  href={PAGE_PATH.CONTACT}
                  styleHighlight="bg-yellow-300"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    Contact
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z"
                      />
                    </svg>
                  </span>
                </LinkTypography>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default LayoutNavbar;

type LinkTypographyProps = {
  newTab?: boolean;
  styleHighlight?: ClassValue;
  children: React.ReactNode;
} & LinkProps;
const LinkTypography = (props: LinkTypographyProps) => {
  const { newTab, styleHighlight, children, href } = props;
  return (
    <Link
      className="font-medium group relative block overflow-hidden rounded px-3 py-1 text-base text-slate-900"
      href={href}
      rel={newTab ? 'noopener noreferrer' : undefined}
      target={newTab ? '_blank' : undefined}
    >
      <span
        className={cn(
          'absolute inset-0 z-0 h-full rounded transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-8',
          'bg-primary',
          styleHighlight
        )}
      ></span>
      <div className="relative">{children}</div>
    </Link>
  );
};

{
  /* <motion.div
initial={{ opacity: 0, y: -60 }}
animate={{ opacity: 1, y: 0 }}
transition={{
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
}}
viewport={{ once: true }}
> */
}
