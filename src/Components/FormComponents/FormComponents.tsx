import { useField } from 'formik';
import { Input, Tooltip } from 'antd';
import {
    StyledLabel,
} from './FormComponents.styles';
import {
    InputFieldType,
} from './FormComponents.types';

export const InputField = ({
    label,
    isPasswordField,
    optionalField,
    disabled,
    placeholder,
    className,
    onBlur,
    prefix,
    dataTestId,
    ...props
}: InputFieldType): JSX.Element => {
    const { name, id, type } = props;
    const [field, meta] = useField(props);
    return (
        <>
            {label && (
                <StyledLabel htmlFor={id || name}>
                    {label}
                    <i>{optionalField ? ' - Optional' : ''}</i>
                </StyledLabel>
            )}
            <Tooltip
                placement="right"
                title={
                    meta.touched && meta.error && meta.error.includes(`\n`) ? (
                        <ul className="error-validation-list">
                            {meta.error.split(`\n`)[0]}
                            {meta.error
                                .split(`\n`)
                                .slice(1)
                                .map((x, index) => (
                                    <li key={`${props.name}-${x},${index}`}>{x}</li>
                                ))}
                        </ul>
                    ) : meta.touched && meta.error ? (
                        meta.error
                    ) : (
                        undefined
                    )
                }
            >
                {isPasswordField ? (
                    <Input.Password
                        data-testid={dataTestId}
                        disabled={disabled}
                        className={`text-input ${meta.touched && meta.error ? 'error' : ''} ${className || ''}`}
                        placeholder={placeholder}
                        {...field}
                    />
                ) : (
                    <Input
                        data-testid={dataTestId}
                        prefix={prefix}
                        disabled={disabled}
                        placeholder={placeholder}
                        type={type}
                        className={`text-input ${meta.touched && meta.error ? 'error' : ''} ${className || ''}`}
                        {...field}
                        onBlur={onBlur || field.onBlur}
                    />
                )}
            </Tooltip>
        </>
    );
};
