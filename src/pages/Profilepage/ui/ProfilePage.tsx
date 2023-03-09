import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
    className?: string,
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const { id } = useParams<{id: string}>();

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack isMaxWidth gap="16">
                <EditableProfileCard id={id} />
            </VStack>
        </Page>

    );
};

export default ProfilePage;
