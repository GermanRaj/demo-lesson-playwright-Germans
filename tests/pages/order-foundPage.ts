import { Locator, Page } from '@playwright/test'
import { AuthorizedPage } from './authorized-page'

export class OrderFound extends AuthorizedPage {
  readonly orderListName: Locator
  readonly orderListPhone: Locator
  readonly orderListComment: Locator

  constructor(page: Page) {
    super(page)
    this.orderListName = page.getByTestId('order-item-0')
    this.orderListPhone = page.getByTestId('order-item-1')
    this.orderListComment = page.getByTestId('order-item-2')
  }
}
