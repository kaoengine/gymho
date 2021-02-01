import React from 'react';

import  ExeImg  from './ExeImg';


export default {
  title: 'Example/ExeImg',
  component: ExeImg,
  argTypes: {
    size: { control: 'input' },
  },
};

const Template = (args) => <ExeImg {...args} />;


export const Size = Template.bind({});
Size.args = {
  size: '140px',
};

