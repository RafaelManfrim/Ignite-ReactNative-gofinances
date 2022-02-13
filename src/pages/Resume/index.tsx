import React, { useState } from "react";
import { StatusBar } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ResumeContainer } from "./styles";
import theme from "../../global/styles/theme";
import { Wrapper } from '../../components/Wrapper'
import { Header } from "../../components/Header";
import { HistoryCard } from "../../components/HistoryCard";
import { categories } from "../../utils/categories";
import { TransactionFromStorage } from "../../types";

type CategoryData = {
    id: string
    name: string
    color: string
    total: number
}

export function Resume() {
    const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>([])

    const collectionKey = '@gofinances:transactions'

    async function loadData() {
        const response = await AsyncStorage.getItem(collectionKey)
        const responseFormatted = response ? JSON.parse(response) : {}

        if(responseFormatted.transactions) {
            const transactions: TransactionFromStorage[]  = responseFormatted.transactions

            const expensives = transactions.filter(transaction => transaction.type === 'withdraw')

            const totalByCategory: CategoryData[] = []

            categories.forEach(category => {
                let categorySum = 0

                expensives.forEach(expensive => {
                    if(expensive.category === category.key) {
                        categorySum += expensive.amount
                    }
                })

                if(categorySum > 0) {
                    totalByCategory.push({
                        id: category.key,
                        name: category.name,
                        color: category.color,
                        total: categorySum
                    })
                }
            })

            setTotalByCategories(totalByCategory)
        }
    }

    useFocusEffect(() => {
        loadData()
    })

    return (
        <Wrapper>
            <StatusBar backgroundColor={theme.colors.primary} />
            <Header title="Resumo" />

            <ResumeContainer>
                {totalByCategories.map((category) => <HistoryCard key={category.id} color={category.color} title={category.name} amount={category.total} />)}
            </ResumeContainer>

        </Wrapper>
    )
}