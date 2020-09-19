import React, { ChangeEvent } from "react";
import { StyledInputField } from "./Styles";

interface InputFieldProps {
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

export const InputField = (props: InputFieldProps) => {
    return (
        <StyledInputField placeholder={props.placeholder} value={props.value} onChange={(event: ChangeEvent<HTMLInputElement>) => props.onChange(event.target.value)}></StyledInputField>
    )
}