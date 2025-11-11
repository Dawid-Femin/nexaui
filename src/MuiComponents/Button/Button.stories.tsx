import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import Send from "@mui/icons-material/Send"

const meta: Meta<typeof Button> = {
  title: "MUI Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The text displayed inside the button.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    label: "Hello Button",
    variant: "contained",
    color: "primary",
  },
};

export const Small: Story = {
  args: {
    label: "Small Button",
    variant: "contained",
    color: "primary",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    label: "Large Button",
    variant: "contained",
    color: "primary",
    size: "large",
  },
};

export const StartIcon: Story = {
  args: {
    label: "Send",
    variant: "contained",
    color: "primary",
    startIcon: <Send />,
  },
};

export const EndIcon: Story = {
  args: {
    label: "Send",
    variant: "contained",
    color: "primary",
    endIcon: <Send />,
  },
};

export const OutlinedSecondary: Story = {
  args: {
    label: "Outlined",
    variant: "outlined",
    color: "secondary",
  },
};

export const TextSuccess: Story = {
  args: {
    label: "Text Button",
    variant: "text",
    color: "success",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    variant: "contained",
    color: "primary",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width",
    variant: "contained",
    color: "primary",
    fullWidth: true,
  },
};
