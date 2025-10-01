// tests__/ProductList.test.js
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ProductForm from '../src/components/ProductForm'

describe('ProductForm', () => {
  it('llama onSubmit con datos válidos', () => {
    const handleSubmit = jest.fn()
    render(<ProductForm onSubmit={handleSubmit} />)

    fireEvent.change(screen.getByLabelText(/nombre/i), {
      target: { value: 'Nuevo producto' },
    })
    fireEvent.click(screen.getByText(/guardar/i))

    expect(handleSubmit).toHaveBeenCalledWith({
      name: 'Nuevo producto',
      // ...otros campos si los tienes
    })
  })
})
