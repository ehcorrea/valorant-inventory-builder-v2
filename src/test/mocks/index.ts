import { mockedRouter } from './router';

export * from './api';
export * from './router';

jest.mock('expo-image', () => {
  const actualExpoImage = jest.requireActual('expo-image');
  const { Image } = jest.requireActual('react-native');

  return { ...actualExpoImage, Image };
});

jest.mock('expo-router', () => {
  return {
    router: mockedRouter,
  };
});
