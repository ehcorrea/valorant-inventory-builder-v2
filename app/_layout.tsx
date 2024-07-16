import { useCallback } from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Provider } from '@/components';

SplashScreen.preventAutoHideAsync();

export default function LayoutStack() {
  const [fontsLoaded, fontError] = useFonts({
    'ShareTech-Regular': require('@/assets/fonts/ShareTech-Regular.ttf'),
    'Tungsten-SemiBold': require('@/assets/fonts/Tungsten-SemiBold.ttf'),
    'Valorant-Font': require('@/assets/fonts/Valorant-Font.ttf'),
    Dinnextw1g: require('@/assets/fonts/Dinnextw1g.otf'),
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
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </View>
    </Provider>
  );
}
