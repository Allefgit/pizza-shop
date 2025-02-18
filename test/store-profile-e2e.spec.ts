import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Allefin')
  await page.getByLabel('Descrição').fill('Outra descrição')

  await page.getByRole('button', { name: 'Salvar' }).click()
  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso!')
  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()
  await page.waitForTimeout(200)

  await expect(page.getByRole('button', { name: 'Allefin' })).toBeVisible()
})

test('update profile with wrong credentials', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Erro')
  await page.getByLabel('Descrição').fill('Outra descrição')

  await page.getByRole('button', { name: 'Salvar' }).click()
  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Houve um erro durante a atualização!')
  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()
  await page.waitForTimeout(200)

  await expect(page.getByRole('button', { name: 'Pizza Shop' })).toBeVisible()
})
