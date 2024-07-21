import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { useTheme } from 'styled-components/native';

import { Layout } from '@/components';

export default () => {
  const theme = useTheme();
  return (
    <Layout>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: theme.colors.transparent },
          }}
        >
          <Stack.Screen name="sprays" />
        </Stack>
      </SafeAreaView>
    </Layout>
  );
};
