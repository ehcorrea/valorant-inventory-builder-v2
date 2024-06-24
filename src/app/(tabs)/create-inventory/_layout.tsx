import { Stack } from 'expo-router';

export default function LayoutStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="skins"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
