import type { ComponentMeta, ComponentStory } from '@storybook/react'

import AboutLayout from './AboutLayout'

export const generated: ComponentStory<typeof AboutLayout> = (args) => {
  return <AboutLayout {...args} />
}

export default {
  title: 'Layouts/AboutLayout',
  component: AboutLayout,
} as ComponentMeta<typeof AboutLayout>
