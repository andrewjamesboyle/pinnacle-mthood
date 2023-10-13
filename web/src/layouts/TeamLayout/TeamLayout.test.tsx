import { render } from '@redwoodjs/testing/web'

import TeamLayout from './TeamLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TeamLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeamLayout />)
    }).not.toThrow()
  })
})
