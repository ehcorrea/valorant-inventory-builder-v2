import { ThemeProvider } from 'styled-components/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import theme from '../../constants/theme';

type ProviderProps = {
  children: React.ReactElement;
};

const queryClient = new QueryClient();

export function Provider({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
