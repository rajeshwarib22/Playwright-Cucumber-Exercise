import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I open the cart', async () => {
    await new Purchase(getPage()).openCart();
});

Then('I checkout', async () => {
    await new Purchase(getPage()).clickCheckout();
});

Then('I enter customer information', async () => {
    await new Purchase(getPage()).enterCustomerInfo();
});

Then('I continue checkout', async () => {
    await new Purchase(getPage()).clickContinue();
});

Then('I finish the purchase', async () => {
    await new Purchase(getPage()).clickFinish();
});

Then('I should see the purchase confirmation message', async () => {
    await new Purchase(getPage()).validatePurchaseMessage();
});