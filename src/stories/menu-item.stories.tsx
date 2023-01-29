import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MenuItem } from "./menu-item";

export default {
  title: "MenuItem",
  component: MenuItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const DefaultItem = Template.bind({});

DefaultItem.args = {
  label: "Пункт меню",
};

export const ActiveItem = Template.bind({});
ActiveItem.args = {
  active: true,
  label: "Пункт меню",
};
