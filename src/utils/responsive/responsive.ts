import { Dimensions } from 'react-native';
import { RFValue as rfvalue } from 'react-native-responsive-fontsize';

const bases = {
  width: 360,
  height: 780,
};

const { width, height } = Dimensions.get('window');

const rwvalue = (size: number) => Math.floor((width / bases.width) * size);
const rhvalue = (size: number) => Math.floor((height / bases.height) * size);

export { rwvalue, rhvalue, rfvalue };
