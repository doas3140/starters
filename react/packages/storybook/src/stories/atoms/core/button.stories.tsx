import React from 'react'
import {Story, Meta} from '@storybook/react'
import StoryWrapper from '../../wrapper'

import * as Atom from 'ui/atoms'

const StoryComponent = Atom.Button
type StoryProps = Atom.ButtonProps

export default {
  title: 'atoms/core/Button',
  component: StoryComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: { backgroundColor: { control: 'color' } },
} as Meta<typeof StoryComponent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<typeof StoryComponent> = (args: any) => (
  <StoryWrapper>
    <StoryComponent {...args} />
  </StoryWrapper>
)

// CHANGE EXAMPLE BELOW
// More on args: https://storybook.js.org/docs/react/writing-stories/args
let args: StoryProps

export const Button = Template.bind({})
args = {
  ...Atom.ButtonDefaultProps,
}
Button.args = {...args}
