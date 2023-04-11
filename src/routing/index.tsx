import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../views/home';
import Secondary from '../views/secondary';
import {Button, Linking} from 'react-native';

const Stack = createNativeStackNavigator<navigationParams>();

const Routing: React.FC = () => {
  // raltvein://app
  const ll = async () => {
    const link = 'raltvein://Secondary';
    Linking.openURL(link);
    // const resp = await Linking.canOpenURL(link);
    // console.log(`can open ${link}: ${resp ? 'yes' : 'nope'}`);
  };

  const linkingConfig: LinkingOptions<navigationParams> = {
    prefixes: ['raltvein://'],
    config: {
      screens: {
        Home: {
          path: 'Home'
        },
        Secondary: {
          path: 'Secondary'
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linkingConfig}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Secondary" component={Secondary} />
      </Stack.Navigator>
      <Button onPress={ll} title="linking" />
    </NavigationContainer>
  );
};

export type navigationParams = {
  Home: undefined;
  Secondary: {color: string};
};

export default Routing;
