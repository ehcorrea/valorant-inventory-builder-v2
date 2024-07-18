import { withLayoutContext } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';

import { Layout, TopTabsLabel } from '@/components';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function () {
  const theme = useTheme();
  return (
    <Layout>
      <SafeAreaView style={{ flex: 1 }}>
        <MaterialTopTabs
          screenOptions={({ route }) => {
            return {
              tabBarIndicator: () => <></>,
              tabBarScrollEnabled: true,
              tabBarBounces: false,
              tabBarItemStyle: {
                width: 'auto',
              },
              tabBarStyle: {
                backgroundColor: theme.colors.black,
              },
              tabBarLabel: ({ focused }) => (
                <TopTabsLabel
                  focused={focused}
                  name={route.name.toUpperCase()}
                />
              ),
            };
          }}
        >
          <MaterialTopTabs.Screen name="sprays" />
        </MaterialTopTabs>
      </SafeAreaView>
    </Layout>
  );
}
