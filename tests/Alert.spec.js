import {test,expect}from '@playwright/test'
test('Alert Handling',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    await page.once('Dialog',async(dialog)=>{                                // INSTEAD OF once(one tym use),on -is used to accpet in all conditions
        await console.log("Simple Alert:", dialog.message())
        await dialog.accept()
    })
    await page.locator('//button[@class="btn btn-danger"]').click()
 //   await page.waitForTimeout(3000)                                   // use timeout if needed to view
  await page.locator('(//a[@class="analystic"])[2]').click()
   await page.once('Dialog',async(dialog)=>{
    await console.log("Confirmation Alert:", dialog.message())
     await dialog.dismiss()
})
    await page.locator('//button[@class="btn btn-primary"]').click()
await page.waitForTimeout(3000) 
     await page.locator('(//a[@class="analystic"])[3]').click()
     await page.once('Dialog',async(dialog)=>{
    await console.log("Prompt Alert:", dialog.message())
     await dialog.accept('Hey')
     })

     await page.locator('//button[@class="btn btn-info"]').click()
// await page.waitForTimeout(3000) 

})

