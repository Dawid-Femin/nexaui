import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "MUI Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    severity: {
      control: "select",
      options: ["error", "warning", "info", "success"],
      description: "The severity of the alert.",
      table: {
        defaultValue: { summary: "info" },
      },
    },
    variant: {
      control: "select",
      options: ["filled", "outlined", "standard"],
      description: "The variant of the alert.",
      table: {
        defaultValue: { summary: "standard" },
      },
    },
    message: {
      control: "text",
      description: "The content of the alert.",
    },
    onClose: {
      action: "closed",
      description: "Callback fired when alert is closed.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    severity: "info",
    message: "This is an info alert",
    variant: "standard",
  },
};

export const Success: Story = {
  args: {
    severity: "success",
    message: "This is a success alert",
    variant: "standard",
  },
};

export const Warning: Story = {
  args: {
    severity: "warning",
    message: "This is a warning alert",
    variant: "standard",
  },
};

export const Error: Story = {
  args: {
    severity: "error",
    message: "This is an error alert",
    variant: "standard",
  },
};

export const Filled: Story = {
  args: {
    severity: "info",
    message: "This is a filled alert",
    variant: "filled",
  },
};

export const Outlined: Story = {
  args: {
    severity: "info",
    message: "This is an outlined alert",
    variant: "outlined",
  },
};

export const WithCloseButton: Story = {
  args: {
    severity: "info",
    message: "You can close me",
    variant: "standard",
    onClose: () => console.log("Alert closed"),
  },
};
