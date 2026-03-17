import {test,expect}from '@playwright/test'
test('Frame',async({page})=> {
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const singleFrame = await page.frameLocator('//iFrame[@id="singleframe"]')
    await singleFrame.locator('//input[@type="text"]').fill('Hii')

    await page.locator('(//a[@class="analystic"])[2]').click()

    const multiFrames = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const frame = await multiFrames.frameLocator('//iframe[@src="SingleFrame.html"]')
    await frame.locator('//input[@type="text"]').fill('Hello')


})
