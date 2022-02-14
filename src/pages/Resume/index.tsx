import React, { useState } from "react";
import { StatusBar } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { VictoryPie } from "victory-native"
import { ResumeContainer, MonthSelect, MonthSelectIcon, MonthSelectButton, Month } from "./styles";
import theme from "../../global/styles/theme";
import { Wrapper } from '../../components/Wrapper'
import { Header } from "../../components/Header";
import { HistoryCard } from "../../components/HistoryCard";
import { categories } from "../../utils/categories";
import { TransactionFromStorage } from "../../types";
import { RFValue } from "react-native-responsive-fontsize";

type CategoryData = {
    id: string
    name: string
    color: string
    total: number
    percentage: string
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

            const expensivesTotal = expensives.reduce((total, expensive) => total + expensive.amount, 0)

            const totalByCategory: CategoryData[] = []

            categories.forEach(category => {
                let categorySum = 0

                expensives.forEach(expensive => {
                    if(expensive.category === category.key) {
                        categorySum += expensive.amount
                    }
                })

                if(categorySum > 0) {
                    const percentage = (categorySum / expensivesTotal * 100).toFixed(0) + '%'

                    totalByCategory.push({
                        id: category.key,
                        name: category.name,
                        color: category.color,
                        total: categorySum,
                        percentage
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

            <ResumeContainer showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: useBottomTabBarHeight() }} >
                <MonthSelect>
                    <MonthSelectButton>
                        <MonthSelectIcon name="chevron-left" />
                    </MonthSelectButton>
                    <Month>Maio, 2020</Month>
                    <MonthSelectButton>
                        <MonthSelectIcon name="chevron-right" />
                    </MonthSelectButton>
                </MonthSelect>
                
                <VictoryPie 
                    data={totalByCategories} 
                    x="percentage" 
                    y="total" 
                    colorScale={totalByCategories.map(category => category.color)} 
                    style={{ labels: { fontSize: RFValue(18), fontWeight: 'bold', fill: '#FFF' } }} 
                    labelRadius={75}
                    padding={{ top: 0, right: 28, left: 28 }}
                />

                {totalByCategories.map((category) => <HistoryCard key={category.id} color={category.color} title={category.name} amount={category.total} />)}
            </ResumeContainer>

        </Wrapper>
    )
}