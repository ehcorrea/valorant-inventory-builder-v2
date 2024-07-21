import { useRef, useState } from 'react';

import { TextInput, TextInputProps } from 'react-native';

import * as S from './InputSearch.styles';

export type InputSearchProps = TextInputProps;

export function InputSearch({ onChangeText, ...props }: InputSearchProps) {
  const [text, setText] = useState('');
  const inputRef = useRef<TextInput>(null);

  return (
    <S.Wrapper
      onPress={() => {
        inputRef.current?.focus();
      }}
    >
      <S.Icon name="search" />
      <S.Input
        ref={inputRef}
        onChangeText={(value) => {
          setText(value);
          onChangeText?.(value);
        }}
        value={text}
        {...props}
      />
    </S.Wrapper>
  );
}
