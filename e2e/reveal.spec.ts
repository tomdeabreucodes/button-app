import { test, expect } from '@playwright/test'

test('reveals the secret text and disables the button on click', async ({ page }) => {
  await page.goto('/')

  const revealButton = page.getByRole('button', { name: 'Reveal' })
  const secretText = page.getByText('Secret text')

  await expect(secretText).toBeHidden()
  await expect(revealButton).toBeEnabled()

  await revealButton.click()

  await expect(secretText).toBeVisible()
  await expect(revealButton).toBeDisabled()
})
