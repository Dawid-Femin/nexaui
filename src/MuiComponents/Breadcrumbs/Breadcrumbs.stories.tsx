import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumbs } from "./Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "MUI Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  argTypes: {
    items: {
      description: "The list of breadcrumb items.",
      control: "object",
      table: {
        type: { summary: "BreadcrumbItem[]" },
      },
    },
    separator: {
      description: "The character or element used to separate items.",
      control: "text",
      table: {
        defaultValue: { summary: "/" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Basic: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Library", href: "/library" },
      { label: "Data" },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Shoes" },
    ],
    separator: ">",
  },
};

export const LongTrail: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Store", href: "/store" },
      { label: "Clothing", href: "/store/clothing" },
      { label: "Men", href: "/store/clothing/men" },
      { label: "Jackets" },
    ],
  },
};
