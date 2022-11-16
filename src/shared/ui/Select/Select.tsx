import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string,
    content: string,
}

interface SelectProps {
    className?: string,
    label?: string,
    options?: SelectOption[],
    value?: string,
    onChange?: (value: string) => void,
    readonly?: boolean,
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange,
    } = props;
    const mods: Mods = {};

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionsList = useMemo(() => options?.map((_) => (
        <option
            className={cls.option}
            value={_.value}
            key={_.value}

        >
            {_.content}
        </option>
    )), [options]);

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
});
