import { BasePage } from './base-page'
import { Locator, Page } from '@playwright/test'

export class AuthorizedPage extends BasePage {
  readonly btnStatus: Locator
  readonly logOutBtn: Locator
  readonly inputOrderNumber: Locator
  readonly trackingBtn: Locator

  constructor(page: Page) {
    super(page)
    this.btnStatus = page.getByTestId('openStatusPopup-button')
    this.logOutBtn = page.getByTestId('logout-button')
    this.inputOrderNumber = page.getByTestId('searchOrder-input')
    this.trackingBtn = page.getByTestId('searchOrder-submitButton')
  }
}
