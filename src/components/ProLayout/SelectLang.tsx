import { useTranslation } from 'react-i18next';

const SelectLang = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;

  const changeLanguage = () => {
    i18n.changeLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <div onClick={changeLanguage} style={{ cursor: 'pointer' }}>
      {language === 'zh' ? 'EN' : '中文'}
    </div>
  );
};

export default SelectLang;
