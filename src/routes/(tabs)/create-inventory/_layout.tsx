import { Layout } from '@/components/Layout/Layout';
import { Stack } from 'expo-router';

export default function LayoutStack() {
  return (
    <Layout>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: undefined },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="skins"
          options={{
            presentation: 'modal',
          }}
        />
      </Stack>
    </Layout>
  );
}
