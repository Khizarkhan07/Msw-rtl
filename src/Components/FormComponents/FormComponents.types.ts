/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export type InputFieldType = {
    id?: string;
    label?: string;
    name: string;
    type: string;
    disabled?: boolean;
    isPasswordField?: boolean;
    isContactField?: boolean;
    optionalField?: boolean;
    placeholder?: string;
    onChange?: (e: any) => void;
    className?: string;
    onBlur?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
    prefix?: string;
    validate?: (values: string) => string;
    dataTestId?: string;
};