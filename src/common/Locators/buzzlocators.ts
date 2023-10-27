import {Locator, Page} from '@playwright/test'

export class Buzzlocators{
   
    readonly page: Page;
    readonly buzz: string;
    readonly buzzpage: string;
    readonly postfield : string;
    readonly postsubmit : string;
    readonly sharephoto : string;
    readonly photoinput : string;
    readonly photshare  : string;
    readonly sharevideo : string;
    readonly videourl : string;
    readonly sharevideobutton : string;
    readonly verificationcomment : string;
    
    constructor(page: Page){
        this.page = page
        this.buzz = "//span[text()='Buzz']";
        this.buzzpage = "//div[@class='oxd-grid-2 orangehrm-buzz-layout']";
        this.postfield ="//textarea[@class='oxd-buzz-post-input']";
        this.postsubmit ="//button[text()=' Post ']";
        this.sharephoto ="//button[text()=' Share Photos']";
        this.photoinput="//p[text()='Add Photos']";
        this.photshare= "//button[text()=' Share ']";
        this.sharevideo ="//button[text()=' Share Video']";
        this.videourl="//textarea[@placeholder='Paste Video URL']";
        this.sharevideobutton ="//button[text()=' Share ']";
        this.verificationcomment="(//div[@class='orangehrm-buzz-post-header'])[1]"
    }
}


