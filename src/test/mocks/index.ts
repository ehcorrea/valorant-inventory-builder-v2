export * from './api';

jest.mock('expo-image', () => {
  const actualExpoImage = jest.requireActual('expo-image');
  const { Image } = jest.requireActual('react-native');

  return { ...actualExpoImage, Image };
});
