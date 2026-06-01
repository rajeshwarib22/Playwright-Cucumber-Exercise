import { Page } from "@playwright/test";

export class Purchase {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async openCart() {
        await this.page.locator('.shopping_cart_link').click();
    }

    public async clickCheckout() {
        await this.page.locator('#checkout').click();
    }

    public async enterCustomerInfo() {
        await this.page.locator('#first-name').fill('Rajeshwari');
        await this.page.locator('#last-name').fill('Bhirud');
        await this.page.locator('#postal-code').fill('28269');
    }

    public async clickContinue() {
        await this.page.locator('#continue').click();
    }

    public async clickFinish() {
        await this.page.locator('#finish').click();
    }

    public async validatePurchaseMessage() {
        const text = await this.page
            .locator('.complete-header')
            .textContent();

        if (text?.trim() !== 'Thank you for your order!') {
            throw new Error(
                `Expected 'Thank you for your order!' but found '${text}'`
            );
        }
    }
}