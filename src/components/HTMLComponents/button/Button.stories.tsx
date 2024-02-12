import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    onClick: () => null,
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: (
      <p className="title-font text-xl font-bold text-white">Clique em mim</p>
    ),
  },
};
