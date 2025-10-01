// tests__/Login.test.js
import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { FormProvider, useForm } from 'react-hook-form'
import Login from '../src/pages/Login'
import * as authService from '../src/services/auth'

// 👀 Mock del servicio
jest.mock('../src/services/auth')

describe('Login component', () => {
  it('llama a handleLogin con datos válidos al hacer submit', async () => {
    authService.handleLogin.mockResolvedValue({ status: 200 }) // simulamos respuesta exitosa

    render(<Login />)

    // Llenar los inputs
    fireEvent.change(screen.getByPlaceholderText(/Correo/i), {
      target: { value: 'a.cr09@hotmail.com' },
    })
    fireEvent.change(screen.getByPlaceholderText(/Contraseña/i), {
      target: { value: '11111' },
    })

    // Hacer submit
    fireEvent.click(screen.getByRole('button', { name: /iniciar sesión/i }))

    // Verificar que se llamó con el payload correcto
    await waitFor(() => {
      expect(authService.handleLogin).toHaveBeenCalledWith({
        email: 'a.cr09@hotmail.com',
        password: '11111',
      })
    })
  })
})
