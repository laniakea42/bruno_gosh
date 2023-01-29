import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  size: "small",
  label: "Вход",
};

export const SmallSecondary = Template.bind({});
SmallSecondary.args = {
  primary: false,
  size: "small",
  label: "Вход",
};

export const Medium = Template.bind({});
Medium.args = {
  primary: true,
  size: "medium",
  dashed: true,
  label: "Каталог",
};

export const MediumSecondary = Template.bind({});
MediumSecondary.args = {
  primary: false,
  size: "medium",
  label: "Каталог",
};

export const Large = Template.bind({});
Large.args = {
  primary: false,
  size: "large",
  label: "Посмотреть всех",
};
