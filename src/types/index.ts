export type TransactionFromStorage = {
    id: string
    amount: number
    category: string
    date: Date
    name: string
    type: "deposit" | "withdraw"
}