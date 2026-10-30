import type { Meta, StoryObj } from "@storybook/react-vite";

import TagButton from "../components/TagButton";
import { fn } from "storybook/test";

const meta = {
  title: "Buttons/TagButton", // 경로
  component: TagButton,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "버튼의 텍스트",
      defaultValue: { summary: "button" },
    },
    isChecked: {
      control: "boolean",
      description: "버튼의 체크 여부",
      defaultValue: { summary: false },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "button",
    isChecked: false,
  },
};
