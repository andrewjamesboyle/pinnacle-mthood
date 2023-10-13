import { render } from '@redwoodjs/testing/web'

import AuxLayout from './AuxLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AuxLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuxLayout />)
    }).not.toThrow()
  })
})
