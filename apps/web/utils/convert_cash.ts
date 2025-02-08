export enum Currency {
  USD = 'USD',
  BRL = 'BRL',
}

export enum Locale {
  BR = 'pt-BR',
  US = 'en-US',
}

export const convertCash = (amount: number, locale: Locale, currency: Currency) => {
  return amount.toLocaleString(locale, {
    currency: currency,
    currencyDisplay: 'narrowSymbol',
    signDisplay: 'negative',
    style: 'currency',
  })
}
