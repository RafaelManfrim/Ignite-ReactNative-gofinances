import React, { useCallback, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { addMonths, subMonths, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { VictoryPie } from "victory-native"
import { LoadContainer, ResumeContainer, MonthSelect, MonthSelectIcon, MonthSelectButton, Month } from "./styles";
import theme from "../../global/styles/theme";
import { Wrapper } from '../../components/Wrapper'
import { Header } from "../../components/Header";
import { HistoryCard } from "../../components/HistoryCard";
import { categories } from "../../utils/categories";
import { TransactionFromStorage } from "../../types";
import { RFValue } from "react-native-responsive-fontsize";
import { useFocusEffect } from "@react-navigation/native";

type CategoryData = {
    id: string
    name: string
    color: string
    total: number
    percentage: string
}

export function Resume() {
    const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>([])
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [isLoading, setIsLoading] = useState(true)

    const collectionKey = '@gofinances:transactions'

    function handleChangeData(action: 'prev' | 'next') {
        if(action === 'next') {
            setSelectedDate(addMonths(selectedDate, 1))
        } else {
            setSelectedDate(subMonths(selectedDate, 1))
        }
    }

    async function loadData() {
        setIsLoading(true)
        const response = await AsyncStorage.getItem(collectionKey)
        const responseFormatted = response ? JSON.parse(response) : {}

        if(responseFormatted.transactions) {
            const transactions: TransactionFromStorage[]  = responseFormatted.transactions

            const expensives = transactions.filter(transaction => {
                const transactionMonth = new Date(transaction.date).getMonth()
                const transactionYear = new Date(transaction.date).getFullYear()

                if(transaction.type === 'withdraw' && transactionMonth === selectedDate.getMonth() && transactionYear === selectedDate.getFullYear()) {
                    return transaction
                }
            })

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
            setIsLoading(false)
        }
    }

    useFocusEffect(useCallback(() => {
        loadData()
    }, [selectedDate]))

    return (
        <Wrapper>
            <Header title="Resumo" />
            {isLoading ? (
                <LoadContainer>
                    <ActivityIndicator color={theme.colors.primary} size="large" />
                </LoadContainer>
            ) : (
                <ResumeContainer showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: useBottomTabBarHeight() }} >
                    <MonthSelect>
                        <MonthSelectButton onPress={() => handleChangeData('prev')}>
                            <MonthSelectIcon name="chevron-left" />
                        </MonthSelectButton>
                        <Month>{ format(selectedDate, 'MMMM, yyyy', { locale: ptBR }) }</Month>
                        <MonthSelectButton onPress={() => handleChangeData('next')}>
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
            )}

        </Wrapper>
    )
}