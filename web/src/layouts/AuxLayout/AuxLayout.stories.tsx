import type { ComponentMeta, ComponentStory } from '@storybook/react'

import AuxLayout from './AuxLayout'

export const generated: ComponentStory<typeof AuxLayout> = (args) => {
  return <AuxLayout {...args} />
}

export default {
  title: 'Layouts/AuxLayout',
  component: AuxLayout,
} as ComponentMeta<typeof AuxLayout>
