import { Input } from '../Input'
import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form'
import { Error } from './styles'

interface InputFormProps extends TextInputProps {
    control: Control
    name: string
    error: string
}

export function InputForm({ control, name, error, ...rest}: InputFormProps) {
    return (
        <>
            <Controller name={name} control={control} render={({ field: { onChange, value } }) => (
                <Input onChangeText={onChange} value={value} {...rest} />
            )} />
            {error && <Error>{error}</Error>}
        </>
    )
}