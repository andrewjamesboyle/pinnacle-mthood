import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ServiceLayout from './ServicesLayout'

export const generated: ComponentStory<typeof ServiceLayout> = (args) => {
  return <ServiceLayout {...args} />
}

export default {
  title: 'Layouts/ServiceLayout',
  component: ServiceLayout,
} as ComponentMeta<typeof ServiceLayout>
