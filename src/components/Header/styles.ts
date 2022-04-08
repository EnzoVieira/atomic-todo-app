import styled from "styled-components"

export const Container = styled.header`
  width: 100%;

  h1 {
    color: var(--text-title);
  }
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Actions = styled.div`
  max-width: 720px;
  width: 100%;
  padding: 4rem 0 2rem;

  display: flex;
  justify-content: space-between;
`

export const NewTaskButton = styled.button`
  background: var(--purple);
  color: white;
  border: 0;

  height: 3rem;
  padding: 0 3rem;
  border-radius: 0.25rem;

  font-weight: 500;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const TaskStatusSelect = styled.select`
  min-width: 8rem;

  border: 0;
  border-radius: 0.25rem;
  color: var(--text-body);
  font-weight: 500;
  font-size: 1rem;
`
