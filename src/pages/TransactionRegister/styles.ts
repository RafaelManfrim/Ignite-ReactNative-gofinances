import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

const Form = styled.View`
    flex: 1;
    justify-content: space-between;
    padding: 0 28px;
    margin-top: 24px;
`

const Fields = styled.View``

const TypeSelectArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${RFValue(10)}px;
`

export { Form, Fields, TypeSelectArea }