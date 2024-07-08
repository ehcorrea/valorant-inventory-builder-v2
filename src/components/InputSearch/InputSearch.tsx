import { theme } from '@/constants';
import FontAwesome from '@expo/vector-icons/MaterialIcons';
import { TextInput, View } from 'react-native';

export function InputSearch() {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'rgba(217, 217, 217, 0.26)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        borderRadius: 13,
      }}
    >
      <FontAwesome name="search" size={20} />
      <TextInput
        placeholder="Search"
        placeholderTextColor={theme.colors.white}
        style={{
          flex: 1,
          paddingVertical: 5,
          marginLeft: 8,
        }}
      />
    </View>
  );
}
