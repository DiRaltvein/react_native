import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { navigationParams } from '../App';
import { useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../state/slices/user';
import { AppDispatch } from '../state/store';

type Props = NativeStackScreenProps<navigationParams, 'Secondary'>;

const SecondaryView: React.FC<Props> = ({ navigation, route }) => {

    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>()

    return (
        <View>
            <Text
                onPress={() => navigation.goBack()}
            >
                {t('back to home screen')} Chosen color is { route.params.color }
            </Text>
            <Button
                title='increment'
                onPress={() => dispatch(increment())}
            />
            <Button
                title='decrement'
                onPress={() => dispatch(decrement())}
            />
            <Button
                title='increment by 100'
                onPress={() => dispatch(incrementByAmount(100))}
            />
        </View>
    )
}

export default SecondaryView;