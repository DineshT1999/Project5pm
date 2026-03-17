  import {test,expect}from '@playwright/test'
  test('Frame',async({page})=> {
      await page.goto('https://demo.automationtesting.in/Frames.html')
  await page.locator('(//a[@class="analystic"])[2]').click()

    const multiFrames = await page.frameLocator('//iframe[@src="multipleframes.html"]')
    const frame = await multiFrames.frameLocator('//iframe[@src="singleframe.html"]')
    await frame.locator('//input[@type="text"]').fill('Hello')


})
