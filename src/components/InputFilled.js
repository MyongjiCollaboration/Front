import React from 'react';
import styled from 'styled-components';

const InputFilled = ({
  placeholder,
  type,
  value,
  onChange,
  hint,
  error,
  success,
}) => {
  return (
    <InputContainer>
      <Filled
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        isValid={!error && value !== ''}
        isSuccess={success}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!error && !value && hint && <Hint>{hint}</Hint>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
  width: fit-content;
  margin-bottom: 20px;
`;

const Filled = styled.input`
  width: 400px;
  min-height: 60px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  ${({ theme }) => theme.fonts.default};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.red};
  margin-top: 10px;
  ${({ theme }) => theme.fonts.helpText12};
`;

const Hint = styled.div`
  color: ${({ theme }) => theme.colors.helperText};
  margin-top: 10px;
  ${({ theme }) => theme.fonts.helpText12};
`;

const SuccessMessage = styled.div`
  color: ${({ theme }) => theme.colors.green2};
  margin-top: 10px;
  ${({ theme }) => theme.fonts.helpText12};
`;

export default InputFilled;
