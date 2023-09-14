import {useTranslation} from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation('main');
    
    return (
        <div>
            {t('Главная страница1sadf')}
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;