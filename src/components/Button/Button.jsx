import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space}px;
  margin: ${p => p.theme.space}px;
  padding-top: ${p => p.theme.space}px;
  padding-bottom: ${p => p.theme.space}px;
  padding-left: ${p => p.theme.space}px;
  padding-right: ${p => p.theme.space}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => {
    return p.disabled ? p.theme.colors.muted : p.theme.colors.primary;
  }};
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p => p.theme.colors.secondary};
  }
`;

export const Button = ({
  type = 'button',
  disabled = false,
  children,
}) => {
  return (
    <StyledButton type={type} disabled={disabled}>
           {children}
    </StyledButton>
  );
};