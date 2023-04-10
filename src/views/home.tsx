import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { navigationParams } from '../App';

type Props = NativeStackScreenProps<navigationParams, 'Home'>;

const HomeView: React.FC<Props> = ({ navigation }) => {

    const { t } = useTranslation();

    React.useEffect(() => {
        console.log(navigation.getState());
    }, []);

    return (
        <Text
            onPress={() => navigation.push('Secondary', {
                color: 'purple'
            })}
        >
            {t('to second screen')}
        </Text>
    )
}

export default HomeView;