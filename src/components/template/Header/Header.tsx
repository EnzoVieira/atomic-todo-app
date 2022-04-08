import { TaskTableActions } from "../../organisms/TaskTableActions"

import { Container, Content } from "./styles"

export const Header = () => {
  return (
    <Container>
      <Content>
        <h1>TODO LIST</h1>

        <TaskTableActions />
      </Content>
    </Container>
  )
}
