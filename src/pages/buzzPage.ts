import { Page, expect,Locator } from "@playwright/test";
import { Buzzlocators } from "../common/Locators/buzzlocators";

export  class Buzzmenu {
    readonly page: Page;
    private readonly buzzlocators: Buzzlocators;
    readonly path:any
    

    constructor(page: Page) {
        this.page = page;
        this.buzzlocators = new Buzzlocators(page);

    }

    async clickBuzz(){
        await (await this.page.waitForSelector(this.buzzlocators.buzz)).isVisible();
        await this.page.locator(this.buzzlocators.buzz).click();
        let buzzpage = await (await this.page.waitForSelector(this.buzzlocators.buzzpage)).isVisible();
        console.log("buzzpageValidation",buzzpage)
    }

    async sharephoto() {
        await this.page.locator(this.buzzlocators.postfield).fill('Feeling Good');
        // await this.page.locator(this.buzzlocators.postsubmit).click();
        await this.page.locator(this.buzzlocators.sharephoto).click();
        // const [fileChooser] = await Promise.all([
        //     await this.page.waitForEvent('filechooser'),
        //     await this.page.locator("//input[@type='file']").click()
        // ])
        // await fileChooser.setFiles(`C:/Users/yaswanth.leburu/Desktop/Piaywright_cucumber_latest_yas/Playwright_Cucumber_Traning/sampleFile.jpeg`)
        // await this.page.locator(this.buzzlocators.photshare).click();
        await this.page.locator(this.buzzlocators.sharevideo).click();
        await this.page.locator(this.buzzlocators.videourl).fill("https://www.youtube.com/watch?v=OI0F-zEhPJw");
        await this.page.locator(this.buzzlocators.sharevideobutton).click();
        await (await this.page.waitForSelector(this.buzzlocators.verificationcomment)).isVisible();
        const data = await this.page.locator(this.buzzlocators.verificationcomment).textContent();
        console.log("result",data)
    }
}