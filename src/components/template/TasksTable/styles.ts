import styled from "styled-components"

export const Container = styled.main`
  width: 100%;
`

export const ListContent = styled.ul`
  background: var(--background-black);
  max-width: 720px;
  margin: 0 auto;

  border-radius: 0.25rem;
  padding: 1rem;

  list-style: none;

  li + li {
    margin-top: 0.75rem;
  }
`
