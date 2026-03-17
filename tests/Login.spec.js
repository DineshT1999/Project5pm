import{test,expect}from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
test ('Hotel booking',async({page})=>{
    const login = new LoginPage
    await login.visitUrl()
    await login.enterUserName()
    await login.enterPassword()
    await login.ClickButton() 
   
})
