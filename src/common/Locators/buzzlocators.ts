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
    readonly mostRecentPosts : string;
    readonly mostLikedPosts : string;
    readonly mostCommentedPosts : string;
    readonly mostRecentpostdata : string;
    readonly mostLikedPostsdata : string;
    readonly mostCommentedPostsdata : string;
    readonly threeDots : string;
    readonly deletePost : string;
    readonly yesDeletePost : string;
    readonly postComment : string;
    readonly writeComment : string;
    readonly postShareIcon : string;
    readonly postSharedata : string;
    readonly shareInShareIcon : string;
    readonly postHeart : string;
    readonly postLikecount : string;
    readonly sharecount : string;
    readonly commentCount : string;
    readonly upcomingAnniversaries : string;
    readonly upcomingAnniversariesdata : string;
    
    
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
        this.verificationcomment="(//div[@class='orangehrm-buzz-post-header'])[1]";
        this.mostRecentPosts="//button[text()=' Most Recent Posts ']";
        this.mostLikedPosts = "//button[text()=' Most Liked Posts ']";
        this.mostCommentedPosts =  "//button[text()=' Most Commented Posts ']";
        this.mostRecentpostdata ="//div[@class='oxd-grid-1 orangehrm-buzz-newsfeed-posts']";
        this.mostLikedPostsdata="//div[@class='oxd-grid-1 orangehrm-buzz-newsfeed-posts']";
        this.mostCommentedPostsdata="//div[@class='oxd-grid-1 orangehrm-buzz-newsfeed-posts']";
        this.threeDots="(//button[@class='oxd-icon-button'])[2]";
        this.deletePost="//p[text()='Delete Post']";
        this.yesDeletePost ="//button[text()=' Yes, Delete ']";
        this.postHeart="(//div[@class='orangehrm-buzz-post-actions']//div)[1]";
        this.postLikecount= '(//p[@class="oxd-text oxd-text--p"])[1]';

        this.postComment="(//div[@class='orangehrm-like-animation']/following-sibling::button)[1]";
        this.writeComment="//input[@placeholder='Write your comment...']";
        this.commentCount='(//p[@class="oxd-text oxd-text--p orangehrm-buzz-stats-active"])[1]';
        
        this.postShareIcon = "(//button[@class='oxd-icon-button']/following-sibling::button)[1]";
        this.postSharedata="(//div[@class='oxd-buzz-post oxd-buzz-post--active']//textarea)[2]";
        this.shareInShareIcon ="//button[text()=' Share ']";
        this.sharecount= "(//p[@class='oxd-text oxd-text--p orangehrm-buzz-stats-active'])[2]";
        this.upcomingAnniversaries ="//p[text()='Upcoming Anniversaries']/following-sibling::div";
        this.upcomingAnniversariesdata="div.orangehrm-buzz-anniversary-nocontent"
        
    }
}


