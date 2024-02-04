import { Meta, StoryObj } from '@storybook/react'
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Oi"
  }
}
