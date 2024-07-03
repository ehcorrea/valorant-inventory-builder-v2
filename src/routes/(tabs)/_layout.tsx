import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import { theme } from '@/constants';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }} initialRouteName="home">
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: () => (
            <FontAwesome size={28} name="home" color={theme.colors.red} />
          ),
        }}
      />
      <Tabs.Screen
        name="create-inventory"
        options={{
          tabBarIcon: () => (
            <FontAwesome size={28} name="plus" color={theme.colors.red} />
          ),
        }}
      />
    </Tabs>
  );
}
