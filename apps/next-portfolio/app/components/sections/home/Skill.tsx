'use client';
import { Badge } from '@js-bossdev/components';

const STACK = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'NestJS'];
const TOOL_LIBRARIES = [
  'Apollo GraphQL',
  'Mui',
  'Antd',
  'Tailwind',
  'Nx',
  'Git',
  'Jest',
  'Puppeteer',
  'Framer motion',
  'Langchain.js',
  'Git',
  'Figma',
  'Docker',
  'Storybook',
  'Prisma',
  'PostgreSQL',
  'Vite',
];
const CLOUD_PLATFORMS = ['AWS', 'GCP', 'Vercel'];

const Skill = () => {
  return (
    <>
      <div className="container mt-10 w-full">
        <div className="flex flex-col sm:flex-row gap-2 justify-between w-full">
          <div className="max-w-[250px]">
            <h3 className="text-2xl md:text-3xl font-bold">Skills</h3>
            <p className="text-gray-600 text-sm">
              Here are a few technologies I’ve been working with recently.
            </p>
          </div>
          <div className="flex gap-4 flex-col md:flex-row flex-wrap">
            <Card label="Stack">
              {STACK.map((item, index) => (
                <Badge key={index} variant={'outline'}>
                  {item}
                </Badge>
              ))}
            </Card>
            <Card label="Tool & Libraries">
              {TOOL_LIBRARIES.map((item, index) => (
                <Badge key={index} variant={'outline'}>
                  {item}
                </Badge>
              ))}
            </Card>
            <Card label="Cloud Platforms">
              {CLOUD_PLATFORMS.map((item, index) => (
                <Badge key={index} variant={'outline'}>
                  {item}
                </Badge>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;

type CardProps = {
  label: string;
  children: React.ReactNode;
};
const Card = ({ label, children }: CardProps) => {
  return (
    <div className="p-3 bg-white border rounded-lg overflow-hidden sm:w-64">
      <div className="flex flex-col gap-2">
        <p className=" font-bold">{label}</p>
        <div className="flex gap-2 flex-wrap h-fit">{children}</div>
      </div>
    </div>
  );
};
