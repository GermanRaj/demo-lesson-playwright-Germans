import { Locator, Page } from '@playwright/test'
import { AuthorizedPage } from './authorized-page'

export class OrderNotFound extends AuthorizedPage {
  readonly notFoundTitle: Locator
  readonly notFoundDescription: Locator
  readonly picNotFound: Locator

  constructor(page: Page) {
    super(page)
    this.notFoundTitle = page.locator('.not-found__title')
    this.notFoundDescription = page.locator('.not-found__description')
    this.picNotFound = page.locator('.not-found__image')
  }
}
