import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonInterface } from "./Button";
import expansionRightWhite from "/svg/expansion-right-white.svg";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: (
      <p className="title-font text-xl font-bold text-white">Clique em mim</p>
    ),
    onClick: () => null,
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Dialog = (args: ButtonInterface) => (
  <div className="absolute cursor-pointer h-20 left-5 w-20 [&>*]:w-10 [&>*]:w-20 [&>*]:px-0 [&>*]:py-0 [&>*]:h-full [&>*]:rounded-bl-2xl [&>*]:rounded-br-none [&>*]:rounded-t-none [&>button]:bg-highlight [&>button]:shadow-none [&>button]:border-none [&>button]:hover:bg-darker-highlight [&>button]:hover:scale-105">
    <Button {...args}>
      <img
        src={expansionRightWhite}
        alt="expansion-right"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-6 -rotate-90 visible"
      />
    </Button>
  </div>
);
