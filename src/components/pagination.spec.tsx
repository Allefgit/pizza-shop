import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './pagination'

// é uma função que não tem comportamento, mas que anota dentro dela todas as informações relativas ao seu chamamento, ou seja, seus parâmetros, quantas vezes foi chamada e etc
const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear()
  })

  it('should display the rigth amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        onPageChange={() => {}}
        pageIndex={0}
        perPage={10}
        totalCount={200}
      />,
    )

    const totPageCountText = wrapper.getByText('Página 1 de 20')
    const totItemsCountText = wrapper.getByText('Total de 200 Item(s)')

    expect(totPageCountText).toBeInTheDocument()
    expect(totItemsCountText).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        onPageChange={onPageChangeCallback}
        pageIndex={0}
        perPage={10}
        totalCount={200}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })

  it('should be able to navigate to the previous page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        onPageChange={onPageChangeCallback}
        pageIndex={5}
        perPage={10}
        totalCount={200}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Página anterior',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(4)
  })

  it('should be able to navigate to the first page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        onPageChange={onPageChangeCallback}
        pageIndex={5}
        perPage={10}
        totalCount={200}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Primeira página',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(0)
  })

  it('should be able to navigate to the last page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        onPageChange={onPageChangeCallback}
        pageIndex={5}
        perPage={10}
        totalCount={200}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Última página',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(19)
  })
})
