import type {
  Meta,
  // StoryObj
} from '@storybook/react';
import { Welcome } from './components';

// import { within } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';

const meta: Meta<typeof Welcome> = {
  component: Welcome,
  title: 'Welcome',
};
export default meta;
// type Story = StoryObj<typeof Welcome>;

export const Primary = {
  args: {},
};

export const Default = () => {
  return (
    <>
      <Welcome />
      <Welcome />
      <Welcome />
    </>
  );
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to Welcome!/gi)).toBeTruthy();
//   },
// };
