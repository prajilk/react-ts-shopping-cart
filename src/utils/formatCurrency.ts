const CURRENCY_FORMATTER = Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
});

export function formatCurrency(amount: number) {
    return CURRENCY_FORMATTER.format(amount);
}
