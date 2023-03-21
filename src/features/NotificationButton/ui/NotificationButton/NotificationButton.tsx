import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { useDetectDevice } from 'shared/lib/hooks/useDetectDevice/useDetectDevice';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string,
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const isMobile = useDetectDevice();

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR_INVERTED}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    if (isMobile) {
        return (
            <>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </>
        );
    }

    return (
        <div>
            <Popover
                className={classNames(cls.NotificationButton, {}, [className])}
                trigger={trigger}
            >
                <NotificationList className={cls.notifications} />
            </Popover>
        </div>

    );
});