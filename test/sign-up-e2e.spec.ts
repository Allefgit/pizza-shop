import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do restaurante').fill('Pizza Shop')
  await page.getByLabel('Nome do gerente').fill('Allefin')
  await page.getByLabel('Número de telefone').fill('(15) 65587-4235')
  await page.getByLabel('Seu email').fill('allefin@gmail.com')

  await page.getByRole('button', { name: 'Criar restaurante' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso')

  await expect(toast).toBeVisible()
})

test('sign up with worng credencials', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do restaurante').fill('Pizza Erro')
  await page.getByLabel('Nome do gerente').fill('Allefin')
  await page.getByLabel('Número de telefone').fill('(15) 65587-4235')
  await page.getByLabel('Seu email').fill('allefin@gmail.com')

  await page.getByRole('button', { name: 'Criar restaurante' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante')

  await expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer Login' }).click()

  expect(page.url()).toContain('sign-in')
})
