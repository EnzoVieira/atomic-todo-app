import { TaskItem } from "../../organisms/TaskItem"

import { Container, ListContent } from "./styles"

export const TasksTable = () => {
  return (
    <Container>
      <ListContent>
        <TaskItem />
        <TaskItem />
      </ListContent>
    </Container>
  )
}
