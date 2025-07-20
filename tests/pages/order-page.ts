import { Locator, Page } from '@playwright/test'
import { AuthorizedPage } from './authorized-page'

export class OrderPage extends AuthorizedPage {
  readonly name: Locator
  readonly phone: Locator
  readonly comment: Locator
  readonly orderBtn: Locator
  readonly popUp: Locator
  readonly popUpText: Locator

  constructor(page: Page) {
    super(page)
    this.name = page.getByTestId('username-input')
    this.phone = page.getByTestId('phone-input')
    this.comment = page.getByTestId('comment-input')
    this.orderBtn = page.getByTestId('createOrder-button')
    this.popUp = page.getByTestId('orderSuccessfullyCreated-popup')
    this.popUpText = page.getByTestId('orderSuccessfullyCreated-popup')
  }
}
