import currency from "currency.js"

export function formatConnectedTime(value: number) {
  return `${Math.floor(value)} giờ ${Math.round(
    (value - Math.floor(value)) * 60
  )} phút`
}
export function formatCurrency(value: number | string, symbol?: string) {
  return currency(value, { precision: 0 }).format({
    separator: ".",
    symbol: symbol ?? "$",
  })
}
