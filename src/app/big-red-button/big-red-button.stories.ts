// big-red-button.stories.ts

import { Meta, Story } from '@storybook/angular';

import { BigRedButtonComponent } from './big-red-button.component'

export default {
  title: 'Big Red Button',
  component: BigRedButtonComponent,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => ({
    props: args,
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  buttonText: 'Big red',
};