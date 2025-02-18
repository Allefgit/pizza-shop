import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('36', { exact: true })).toBeVisible()
  await expect(page.getByText('-5% em  relação a ontem')).toBeVisible()
})

test('display total month amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('R$ 75,36')).toBeVisible()
  await expect(page.getByText('+9% em relação ao mês passado')).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('253')).toBeVisible()
  await expect(page.getByText('+7% em relação ao mês passado')).toBeVisible()
})

test('display caceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('14')).toBeVisible()
  await expect(page.getByText('+7% em relação ao mês passado')).toBeVisible()
})
