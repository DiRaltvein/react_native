import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { navigationParams } from '../routing';

type Props = NativeStackScreenProps<navigationParams, 'Home'>;

const HomeView: React.FC<Props> = ({ navigation }) => {

    const { t } = useTranslation();

    return (
        <View>
            <Text
                onPress={() => navigation.push('Secondary', {
                    color: 'purple'
                })}
            >
                {t('to second screen')}
            </Text>
        </View>
    )
}

export default HomeView;