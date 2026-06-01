import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async sortProducts(sortOption: string) {
    await this.page.locator('.product_sort_container')
        .selectOption({ label: sortOption });
    }

    public async getPrices(): Promise<number[]> {

        const prices = await this.page
            .locator('.inventory_item_price')
            .allTextContents();

        return prices.map(price =>
            Number(price.replace('$', ''))
        );
    }
    
    public async validateSortedPrices(sortOption: string) {

        const prices = await this.getPrices();

        const expected = [...prices];

        if (sortOption === 'Price (low to high)') {
            expected.sort((a,b) => a - b);
        } else {
            expected.sort((a,b) => b - a);
        }

        if (JSON.stringify(prices) !== JSON.stringify(expected)) {
            throw new Error('Products are not sorted correctly');
        }
    }
    
}