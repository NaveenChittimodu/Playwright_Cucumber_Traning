import { Page } from "@playwright/test";


export class GenericMethods {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

   
    async uploadFiles(clickBrowserLocator: string,fileName: string) {
       try{
        const [uploadFiles] = await Promise.all([
            this.page.waitForEvent("filechooser"),
            this.page.locator(clickBrowserLocator).click()
        ])
        const isMultiple = uploadFiles.isMultiple();
        console.log(isMultiple);
        uploadFiles.setFiles(fileName)
    }
    catch (error) {
    console.error('Error uploading files:', error);
    }
    }
}