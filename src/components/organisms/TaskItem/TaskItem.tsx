import { Container } from "./styles"

import { EditTaskButtons } from "../../molecules/EditTaskButtons"
import { TaskInfo } from "../../molecules/TaskInfo"

export const TaskItem = () => {
  return (
    <Container>
      <div className="task-info">
        <TaskInfo />
      </div>

      <div className="task-edit">
        <EditTaskButtons />
      </div>
    </Container>
  )
}
