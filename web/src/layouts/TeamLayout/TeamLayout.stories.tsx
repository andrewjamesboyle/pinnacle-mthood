import type { ComponentMeta, ComponentStory } from '@storybook/react'

import TeamLayout from './TeamLayout'

export const generated: ComponentStory<typeof TeamLayout> = (args) => {
  return <TeamLayout {...args} />
}

export default {
  title: 'Layouts/TeamLayout',
  component: TeamLayout,
} as ComponentMeta<typeof TeamLayout>
