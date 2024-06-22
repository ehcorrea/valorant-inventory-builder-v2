import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import theme from './constants/theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Valorant-Font': require('../assets/fonts/Valorant-Font.ttf'),
    'ShareTech-Regular': require('../assets/fonts/ShareTech-Regular.ttf'),
    'BowlbyOneSC-Regular': require('../assets/fonts/BowlbyOneSC-Regular.ttf'),
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
    <ThemeProvider theme={theme}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Text style={{ fontSize: 30, fontFamily: 'Valorant-Font' }}>
          Valorant-Font
        </Text>
        <Text style={{ fontSize: 30, fontFamily: 'ShareTech-Regular' }}>
          ShareTech-Regular
        </Text>
        <Text style={{ fontSize: 30, fontFamily: 'ShareTech-Regular' }}>
          ShareTech-Regular
        </Text>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
