import React from 'react';
import '@testing-library/jest-native';
import { QueryClient } from '@tanstack/react-query';
import {
  render as renderUI,
  RenderAPI,
  RenderOptions,
} from '@testing-library/react-native';

import { resetAllStores } from '@/stores/zustand';
import { Provider } from '../components/Provider/Provider';

export * from '@testing-library/react-native';

export * from './mocks';

export const customQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export const TestProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return <Provider customQueryClient={customQueryClient}>{children}</Provider>;
};

export const render = (
  component: React.ReactElement,
  options?: RenderOptions
): RenderAPI => {
  return renderUI(component, {
    wrapper: TestProvider,
    ...options,
  });
};

afterEach(() => {
  customQueryClient.clear();
  resetAllStores();
});
