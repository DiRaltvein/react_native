import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { navigationParams } from '../App';

type Props = NativeStackScreenProps<navigationParams, 'Secondary'>;

const SecondaryView: React.FC<Props> = ({ navigation, route }) => {

    const { t } = useTranslation();

    return (
        <Text
            onPress={() => navigation.goBack()}
        >
            {t('back to home screen')} Chosen color is { route.params.color }
        </Text>
    )
}

export default SecondaryView;