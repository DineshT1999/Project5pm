export class SearchHotelPage{
    constructor(page){
        this.page=page
        this.location=page.locator('//select[@name="location"]')
        this.hotel=page.locator('//select[@name="hotels"]')
        this.roomtype=page.locator('//select[@name="room_type"]')
        this.checkIn=page.locator('//input[@id="datepick_in"]')
        this.checkOut=page.locator('//input[@id="datepick_out"]')
        this.AdultCount=page.locator('//select[@id="adult_room"]')
        this.ChildCount=page.locator('//select[@id="child_room"]')
        this.SubmitButton=page.locator('//input[@id="Submit"]')

    
    }
   async HotelLocation(){
        await this.location.selectOption({label:"Melbourne"})
    }
    async HotelType(){
        await this.hotel.selectOption({label:"Hotel Creek"})
    }
    async RoomType(){
        await this.roomtype.selectOption({label:"Double"})
    }  
    async checkInDate(){
        await this.checkIn.fill('12/03/2026')
    }
    async checkOutDate(){
        await this.checkOut.fill('13/03/2026')
    }
    async AdultsperRoom(){
     await this.AdultCount.selectOption({label:"Two"})
    }
    async ChildrensperRoom(){
        await this.ChildCount.selectOption({label:"One"})
    }
    async Submit(){
        await this.SubmitButton.Click()
    }


}