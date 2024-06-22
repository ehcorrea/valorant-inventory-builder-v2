import React from 'react';

import '@testing-library/jest-native';

import {
  render as renderUI,
  RenderOptions,
  RenderAPI,
} from '@testing-library/react-native';

import { Provider } from '../components/Provider/Provider';

export const render = (
  component: React.ReactElement,
  options?: RenderOptions
): RenderAPI => {
  return renderUI(component, {
    wrapper: ({ children }) => <Provider>{children}</Provider>,
    ...options,
  });
};
