import { expect, test } from '@playwright/test'

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await expect(
    page.getByRole('cell', { name: 'order-1', exact: true }),
  ).toBeVisible()

  await expect(
    page.getByRole('cell', { name: 'order-10', exact: true }),
  ).toBeVisible()
})

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Próxima página' }).click()
  await page.waitForTimeout(50)
  await expect(
    page.getByRole('cell', { name: 'order-11', exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'order-20', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()
  await page.waitForTimeout(50)
  await expect(
    page.getByRole('cell', { name: 'order-51', exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'order-60', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Página anterior' }).click()
  await page.waitForTimeout(50)
  await expect(
    page.getByRole('cell', { name: 'order-41', exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'order-50', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()
  await page.waitForTimeout(50)
  await expect(
    page.getByRole('cell', { name: 'order-1', exact: true }),
  ).toBeVisible()
  await expect(
    page.getByRole('cell', { name: 'order-10', exact: true }),
  ).toBeVisible()
})

test('filter by order id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('ID do pedido').fill('order-5')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(
    page.getByRole('cell', { name: 'order-5', exact: true }),
  ).toBeVisible()
})

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Nome do cliente').fill('Customer 5')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(
    page.getByRole('cell', { name: 'Customer 5', exact: true }),
  ).toBeVisible()
})

test('filter by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()
  await page.getByLabel('Pendente').click()

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()
  await page.waitForTimeout(100)

  await expect(page.getByRole('cell', { name: 'Pendente' })).toHaveCount(10)
})
