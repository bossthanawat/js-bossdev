'use client'
import { Badge } from '@js-bossdev/components';

const STACK = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'NestJS'];
const TOOL_LIBRARIES = [
  'Apollo GraphQL',
  'Mui',
  'Antd',
  'Tailwind',
  'Nx',
  'Jest',
  'Puppeteer',
  'Vite',
  'Framer motion',
  'Langchain.js',
  'Git',
  'Figma',
  'Docker',
  'Storybook',
  'Prisma',
  'PostgreSQL',
];
const CLOUD_PLATFORMS = ['AWS', 'GCP', 'Vercel'];

const Skill = () => {
  return (
    <>
      <div className="container mt-10">
        <h3 className="text-2xl md:text-3xl font-bold">Skills</h3>
        <p className="text-gray-600">
          Here are a few technologies I’ve been working with recently.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
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
    <div className="cursor-pointer">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold">{label}</p>
        <div className="flex gap-2 flex-wrap h-fit">{children}</div>
      </div>
    </div>
  );
};
