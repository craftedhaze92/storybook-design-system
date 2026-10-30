import type { Meta, StoryObj } from "@storybook/react-vite";

import PrimaryButton from "../components/PrimaryButton";
import { fn } from "storybook/test";

const themeOptions = ["dark", "light", "social", "text"];

const meta = {
  title: "Buttons/PrimaryButton", // 경로
  component: PrimaryButton,
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
    theme: {
      control: "select",
      options: themeOptions,
      description: "버튼 테마",
      table: {
        type: { summary: themeOptions.map((o) => `"${o}"`).join(" | ") },
        defaultValue: { summary: "dark" },
      },
    },
    children: {
      control: "text",
      description: "버튼 text",
      defaultValue: { summary: "button" },
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
      defaultValue: { summary: true },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    children: "button",
    theme: "dark",
    disabled: false,
  },
};

export const Light: Story = {
  args: {
    children: "button",
    theme: "light",
    disabled: false,
  },
};

export const Social: Story = {
  args: {
    children: "button",
    theme: "social",
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    children: "button",
    theme: "text",
    disabled: false,
  },
};
