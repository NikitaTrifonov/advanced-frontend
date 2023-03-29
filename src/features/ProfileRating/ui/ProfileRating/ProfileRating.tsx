import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { getUserAuthData } from '@/entities/User';
import { useGetProfileRating, useRateProfile } from '../../api/articleRatingApi';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetProfileRating({ userId: userData?.id ?? '', profileId });
    const [rateProfileMutation] = useRateProfile();
    const rating = data?.[0];

    const handleRateProfile = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateProfileMutation({
                rate: starsCount,
                profileId,
                userId: userData?.id ?? '',
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [profileId, rateProfileMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateProfile(starsCount, feedback);
    }, [handleRateProfile]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateProfile(starsCount);
    }, [handleRateProfile]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <RatingCard
            className={className}
            title={t('Оцените профиль')}
            feedbackTitle={t('Оставьте свой отзыв о профиле')}
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
            hasFeedback
        />
    );
});

export default ProfileRating;
