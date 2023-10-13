import { render } from '@redwoodjs/testing/web'

import ServicesLayout from './ServicesLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ServicesLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServicesLayout />)
    }).not.toThrow()
  })
})
