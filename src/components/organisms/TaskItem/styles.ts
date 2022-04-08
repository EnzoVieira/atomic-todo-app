import styled from "styled-components"

export const Container = styled.li`
  background: var(--surface);
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;

  display: flex;
  justify-content: space-between;

  /* button {
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
  } */

  .task-info {
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
      background: var(--purple-light);
      margin-right: 0.5rem;
    }

    div span {
      color: var(--text-title);
      font-size: 1.25rem;
    }

    div p {
      color: var(--text-body);
    }
  }

  .task-edit {
    display: flex;
    align-items: center;
  }
`
