import type { Meta, StoryObj } from "@storybook/react-vite";

import IconButton from "../components/IconButton";
import { fn } from "storybook/test";

const meta = {
  title: "Buttons/IconButton", // 경로
  component: IconButton,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    alt: {
      control: "text",
      description: "이미지의 alt 속성",
      defaultValue: { summary: "icon" },
    },
    iconPath: {
      control: "text",
      description: "이미지의 경로",
      defaultValue: { summary: "" },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "icon",
    iconPath: "https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg",
  },
};
