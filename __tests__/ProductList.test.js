// __tests__/InfoOneStore.test.js
import React from 'react'
import { render, waitFor } from '@testing-library/react'
import InfoOneStore from '../src/components/pageSections/infoOneStore/InfoOneStore'

import { getStore } from '../src/services/getStore'
import { postGenericRequest } from '../src/services/postGenericRequest'

// mock de servicios
jest.mock('../src/services/getStore', () => ({
  getStore: jest.fn(),
}))
jest.mock('../src/services/postGenericRequest', () => ({
  postGenericRequest: jest.fn(),
}))

describe('InfoOneStore - peticiones', () => {
  it('hace las llamadas a getStore y postGenericRequest', async () => {
    // simulamos respuestas mínimas (no importa el render de tabla)
    getStore.mockResolvedValue({ status: 200, data: { name: 'FakeStore' } })

    postGenericRequest
      .mockResolvedValueOnce({ status: 201, data: [] }) // products
      .mockResolvedValueOnce({ status: 201, data: [] }) // services

    render(<InfoOneStore location={{ state: { id: 123 } }} />)

    // esperamos a que se hagan las llamadas
    await waitFor(() => {
      expect(getStore).toHaveBeenCalledWith(
        expect.objectContaining({
          methodUrl: 'stores',
          data: 123,
        }),
      ) // o con el objeto que espere tu función real
      expect(postGenericRequest).toHaveBeenCalledWith(
        expect.objectContaining({ methodUrl: 'products/findProductsByStore' }),
      )
      expect(postGenericRequest).toHaveBeenCalledWith(
        expect.objectContaining({ methodUrl: 'services/findServicesByStore' }),
      )
    })
  })
})
