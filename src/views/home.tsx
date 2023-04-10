import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { navigationParams } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import { fetchAJoke } from '../state/slices/user';

type Props = NativeStackScreenProps<navigationParams, 'Home'>;

const HomeView: React.FC<Props> = ({ navigation }) => {

    const { t } = useTranslation();
    const count = useSelector((state: RootState) => state.user.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <View>
            <Text
                onPress={() => navigation.push('Secondary', {
                    color: 'purple'
                })}
            >
                {t('to second screen')}, COUNT IS {count}
            </Text>
            <Button
                title='fetch a joke'
                onPress={() => dispatch(fetchAJoke())}
            />
        </View>
    )
}

export default HomeView;