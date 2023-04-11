import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { navigationParams } from '../routing';

type Props = NativeStackScreenProps<navigationParams, 'Secondary'>;

const SecondaryView: React.FC<Props> = ({ navigation, route }) => {

    const { t } = useTranslation();

    return (
        <View>
            <Text
                onPress={() => navigation.goBack()}
            >
                {t('back to home screen')}
            </Text>
        </View>
    )
}

export default SecondaryView;