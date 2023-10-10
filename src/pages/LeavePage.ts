import { Page } from "@playwright/test";
import {leavePageLocators} from "../common/Locators/leavePageLocators"


export class LeavePage {
    readonly page: Page;
    private readonly leavePageLocators: leavePageLocators;

    constructor(page: Page) {
        this.page = page;
        this.leavePageLocators = new leavePageLocators();
    }
}
