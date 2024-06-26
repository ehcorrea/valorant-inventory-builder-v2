import { ImageBackground, ViewProps } from 'react-native';

import image from '@/assets/images/background.png';

export type LayoutProps = {
  children: React.ReactNode;
} & Pick<Partial<ViewProps>, 'onLayout'>;

export function Layout({ children, ...props }: LayoutProps) {
  return (
    <ImageBackground style={{ flex: 1 }} source={image} {...props}>
      {children}
    </ImageBackground>
  );
}
