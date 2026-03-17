export class LoginPage{
    constructor(page){
        this.page=page
        this.uname=page.locator ('//input[@id="username"]')
        this.upass=page.locator('//input[@id="password"]')
        this.button=page.locator('//input[@id="login"]')
        
    }
    async visitUrl(){
        await this.page.goto('https://adactinhotelapp.com/')

    }
    async enterUserName(){
        await this.uname.fill('Dinesh1224')
    }
    async enterPassword(){
        await this.upass.fill('Dinesh@1234')
    }
    async ClickButton(){
        await this.button.click()
    }
    
}
