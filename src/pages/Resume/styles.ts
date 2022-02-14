import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

const ResumeContainer = styled.ScrollView``

const MonthSelect = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px 28px 0;
`

const MonthSelectIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
`

const MonthSelectButton = styled(BorderlessButton)``

const Month = styled.Text`
    font-size: ${RFValue(18)}px;
    padding: 0 16px;
`

export { ResumeContainer, MonthSelect, MonthSelectIcon, MonthSelectButton, Month }