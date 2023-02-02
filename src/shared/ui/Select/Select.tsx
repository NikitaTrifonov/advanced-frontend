import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T,
    content: string,
}

interface SelectProps<T extends string> {
    className?: string,
    label?: string,
    options?: SelectOption<T>[],
    value?: T,
    onChange?: (value: T) => void,
    readonly?: boolean,
}

export const Select = <T extends string>(props: SelectProps<T>) => {
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
        onChange?.(e.target.value as T);
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
};
