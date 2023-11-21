import Image from 'next/image';
import { PAGE_PATH } from '../lib/constants';

export default async function Index() {
  return (
    <>
      <div className="container pt-12">
        <div className="text-3xl font-medium">Contact</div>
        <div className="mt-4 flex flex-col gap-2">
          <div>
            <span className="font-medium">Email: </span>
            <a className="hover:underline" href="mailto: boss41680@gmail.com">
              boss41680@gmail.com
            </a>
          </div>
          <a
            className="font-medium hover:underline"
            href={PAGE_PATH.OUT_PATH.LINKEDIN}
          >
            linkedin
          </a>
          <a
            className="font-medium hover:underline"
            href={PAGE_PATH.OUT_PATH.BLOG_MEDIUM}
          >
            medium
          </a>
          <a
            className="flex gap-1 font-medium hover:underline"
            href={PAGE_PATH.OUT_PATH.GITHUB}
          >
            <Image
              src="/assets/icons/github.svg"
              alt="github"
              width={24}
              height={24}
            />
            <span>Github</span>
          </a>
        </div>
      </div>
    </>
  );
}
