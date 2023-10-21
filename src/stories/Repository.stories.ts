import type { Meta, StoryObj } from '@storybook/react';

import Repository from "../components/Repository/Repository.tsx";

const meta: Meta<typeof Repository> = {
    title: "Components/Repositories",
    component: Repository,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      primary: true,
      label: 'Button',
    },
  };