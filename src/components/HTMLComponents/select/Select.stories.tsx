import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

export default {
  title: "Components/Select",
  component: Select,
  args: {
    items: ["React", "Vue", "Angular"],
    placeholder: "Padrão",
    onChange: () => null,
  },
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const SemItems: Story = {
  args: {
    items: [],
  },
};
