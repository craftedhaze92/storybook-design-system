import type { Meta, StoryObj } from "@storybook/react-vite";

import TagList from "../components/TagList";
import { fn } from "storybook/test";

const meta = {
  title: "List/TagList", // 경로
  component: TagList,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    tagList: {
      control: "object",
      description: "태그 리스트",
      defaultValue: { summary: '["tag1", "tag2", "tag3"]' },
    },
  },
  args: { onTagClick: fn() },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ["tag1", "tag2", "tag3"],
  },
};
