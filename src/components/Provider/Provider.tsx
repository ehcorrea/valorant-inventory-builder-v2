import { ThemeProvider } from 'styled-components/native';

import theme from '../../constants/theme';

type ProviderProps = {
  children: React.ReactElement;
};

export function Provider({ children }: ProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
