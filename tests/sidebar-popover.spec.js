import {test, expect} from '@playwright/test'

test('opens sidebar and nested popover', async ({page}) => {
    await page.setViewportSize({width: 1280, height: 400});
    await page.goto('/')

    await page.getByRole('button', {name: 'Open Sidebar'}).click()

    const nestedTrigger = page.getByRole('button', {name: 'Open anchored popover'})
    await expect(nestedTrigger).toBeVisible()

    await nestedTrigger.click()

    const helloButton = page.getByRole('button', {name: 'Hello 5'})
    await expect(helloButton).toBeVisible()

    await helloButton.click()
})
