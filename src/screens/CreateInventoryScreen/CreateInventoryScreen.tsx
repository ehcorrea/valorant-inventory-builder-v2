import { View } from 'react-native';

import { Text } from '@/components';
import { Link } from 'expo-router';

export function CreateInventoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Link href="/create-inventory/skins">
        <Text>CreateInventoryScreen</Text>
      </Link>
    </View>
  );
}
