import * as React from 'react'
import * as ReactDOM from 'react-dom'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {Home} from '../atoms/home'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', {
      name: /Home/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
