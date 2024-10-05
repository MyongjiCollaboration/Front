import React from 'react';
import styled from 'styled-components';
// import Button02 from './Button02';

const InputField = React.forwardRef(
  (
    { label, id, type, error, buttonLabel, onButtonClick, prefix, as, ...rest },
    ref
  ) => (
    <InputContainer>
      <Label htmlFor={id} isEmpty={!label}>
        {label.split('(')[0] || '\u200B'}
        {label.includes('(') && (
          <GrayText>{`(${label.split('(')[1]}`}</GrayText>
        )}
      </Label>
      <InputWrapper>
        {prefix && <Prefix>{prefix}</Prefix>}
        <Input
          as={as}
          type={type}
          id={id}
          ref={ref}
          hasPrefix={!!prefix}
          padding={id === 'melpickAddress' ? '0' : '0 11px'}
          hasSelect={as === 'select'}
          {...rest}
        />
        {/* {buttonLabel && (
          <StyledButton onClick={onButtonClick}>{buttonLabel}</StyledButton>
        )} */}
      </InputWrapper>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  )
);

InputField.displayName = 'InputField';

export default InputField;

const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.black};
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 11px;
  visibility: ${({ isEmpty }) => (isEmpty ? 'hidden' : 'visible')};
`;

const GrayText = styled.span`
  padding-left: 3px;
  color: ${({ theme }) => theme.colors.gray2};
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-radius: 4px;
  height: 57px;
  overflow: hidden;
`;

const Prefix = styled.span`
  font-size: 16px;
  color: blue;
  padding-left: 11px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  font-size: 16px;
  border-radius: 4px;
  padding: ${({ padding }) => padding};
  border: ${({ hasSelect, theme }) =>
    hasSelect ? `1px solid ${theme.colors.black}` : 'none'};
  flex: 1;
  height: 100%;
`;

// const StyledButton = styled(Button02)`
//   border-left: 1px solid ${({ theme }) => theme.colors.gray1};
//   height: 100%;
// `;

const ErrorMessage = styled.span`
  color: blue;
  font-size: 12px;
  margin-top: 5px;
`;
