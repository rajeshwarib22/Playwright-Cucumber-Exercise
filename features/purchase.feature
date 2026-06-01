Feature: Purchase Feature

Background:
  Given I open the "https://www.saucedemo.com/" page

Scenario: Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  Then I open the cart
  Then I checkout
  Then I enter customer information
  Then I continue checkout
  Then I finish the purchase
  Then I should see the purchase confirmation message