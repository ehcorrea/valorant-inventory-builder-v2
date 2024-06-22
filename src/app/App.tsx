import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Provider } from '@/components';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Valorant-Font': require('@/assets/fonts/Valorant-Font.ttf'),
    'ShareTech-Regular': require('@/assets/fonts/ShareTech-Regular.ttf'),
    'BowlbyOneSC-Regular': require('@/assets/fonts/BowlbyOneSC-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Text style={{ fontSize: 30, fontFamily: 'Valorant-Font' }}>
          Valorant-Font
        </Text>
        <Text style={{ fontSize: 30, fontFamily: 'ShareTech-Regular' }}>
          ShareTech-Regular
        </Text>
        <Text style={{ fontSize: 30, fontFamily: 'BowlbyOneSC-Regular' }}>
          BowlbyOneSC-Regular
        </Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
