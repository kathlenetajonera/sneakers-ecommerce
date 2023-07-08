export const formatAmount = (amount: number) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);
