import{test,expect}from '@playwright/test'
test('Window Handling',async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 17 pro')
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    await page.waitForTimeout(3000)
    
    const [newPage]= await Promise.all([
        context.waitForEvent("page"),
        page.click('(//h2[contains(@aria-label,"iPhone 17 Pro 512 GB")])[1]')   //const arr=[10,20,30,40] // const[a,b]=arr
    ])
    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)
})