import { Locator, Page } from '@playwright/test'

export class OrderPage {
  readonly page: Page
  readonly statusButton: Locator
  readonly name: Locator
  readonly phone: Locator
  readonly comment: Locator
  readonly orderBtn: Locator
  readonly logOutBtn: Locator
  readonly popUp: Locator
  readonly popUpText: Locator


  constructor(page: Page) {
    this.page = page
    this.statusButton = page.getByTestId('openStatusPopup-button')
    this.name = page.getByTestId('username-input')
    this.phone = page.getByTestId('phone-input')
    this.comment = page.getByTestId('comment-input')
    this.orderBtn = page.getByTestId('createOrder-button')
    this.logOutBtn = page.getByTestId('logout-button')
    this.popUp = page.getByTestId('orderSuccessfullyCreated-popup')
    this.popUpText = page.getByTestId('orderSuccessfullyCreated-popup')

  }
}
