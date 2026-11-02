import type { Meta, StoryObj } from "@storybook/react-vite";

import CategoryButton from "../components/CategoryButton";
import { fn } from "storybook/test";

const meta = {
  title: "Buttons/CategoryButton", // 경로
  component: CategoryButton,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    iconAlt: {
      control: "text",
      description: "이미지의 alt 속성",
      defaultValue: { summary: "icon" },
    },
    iconPath: {
      control: "text",
      description: "이미지의 경로",
      defaultValue: { summary: "" },
    },
    text: {
      control: "text",
      description: "버튼의 텍스트",
      defaultValue: { summary: "text" },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath: "https://kr.object.ncloudstorage.com/icons/ic-category.svg",
    text: "카테고리",
  },
};
