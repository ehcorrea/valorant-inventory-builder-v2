import theme from '@/constants/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => (
            <FontAwesome size={28} name="plus" color={theme.colors.red} />
          ),
        }}
      />
    </Tabs>
  );
}
