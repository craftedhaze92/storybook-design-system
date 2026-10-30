import type { Meta, StoryObj } from "@storybook/react-vite";

import DefaultTextField from "../components/DefaultTextField";
import { fn } from "storybook/test";

const meta = {
  title: "TextFields/DefaultTextField", // 경로
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    id: { control: "text", description: "텍스트 필드의 id" },
    errorMessage: { control: "text", description: "텍스트 필드의 에러 메시지" },
    placeholder: { control: "text", description: "텍스트 필드의 placeholder" },
    value: { control: "text", description: "텍스트 필드의 값" },
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
    isError: {
      control: "boolean",
      description: "에러 상태 여부",
      defaultValue: { summary: false },
    },
  },
  args: { onIconClick: fn(), onChange: fn() },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath: "https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg",
    placeholder: "텍스트를 입력해주세요",
    errorMessage: "텍스트를 확인해주세요",
    value: "",
    id: "email",
    isError: false,
  },
};
