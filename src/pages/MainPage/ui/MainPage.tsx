import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const MainPage = () => {
    const { t } = useTranslation('main');

    useEffect(() => {
        throw new Error();
    }, []);

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
