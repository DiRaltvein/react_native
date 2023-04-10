import React from 'react';
import { useTranslation } from 'react-i18next';
import {Button, Text, View} from 'react-native';
import './i18n/i18n';

const App = () => {

  const { t, i18n } = useTranslation();

  return (
    <View>
      <Text>{t('Hello')}</Text>
      <Button
        title={t('change language to ru')}
        onPress={() => i18n.changeLanguage('ru')}
      />
      <Button
        title={t('change language to en')}
        onPress={() => i18n.changeLanguage('en')}
      />
      <Button
        title={t('change language to et')}
        onPress={() => i18n.changeLanguage('et')}
      />
    </View>
  );
};

export default App;
