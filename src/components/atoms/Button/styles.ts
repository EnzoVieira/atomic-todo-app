import styled from "styled-components"

export const StyledButton = styled.button`
  background: var(--text-body);
  border: 0;
  color: white;
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 0.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  & + button {
    margin-left: 0.5rem;
  }
`
