import type { Meta, StoryObj } from "@storybook/react-vite";

import NavigationBar from "../components/NavigationBar";
import { fn } from "storybook/test";

const meta = {
  title: "Navigation/NavigationBar", // 경로
  component: NavigationBar,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isDark: {
      control: "boolean",
      description: "다크모드 여부",
      defaultValue: { summary: false },
    },
    showBackButton: {
      control: "boolean",
      description: "뒤로가기 버튼 여부",
      defaultValue: { summary: true },
    },
    showCloseButton: {
      control: "boolean",
      description: "닫기 버튼 여부",
      defaultValue: { summary: true },
    },
    showTitle: {
      control: "boolean",
      description: "페이지 이름 여부",
      defaultValue: { summary: true },
    },
    title: {
      control: "text",
      description: "페이지 타이틀",
      defaultValue: { summary: "타이틀" },
    },
  },
  args: { onBackButtonClick: fn(), onCloseButtonClick: fn() },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDark: false,
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: "타이틀",
  },
};
