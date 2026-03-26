import{test,expect}from '@playwright/test';

test('Visit insta page',async({page})=>{
    await page.goto('https://www.instagram.com/?hl=en')
    await page.locator('//input[@name="email"]').fill("Dinesh12")
    await page.locator('//input[@name="pass"]').fill("Dinesh123")
    await page.locator('//span[text()="Log in"]').click()

})
