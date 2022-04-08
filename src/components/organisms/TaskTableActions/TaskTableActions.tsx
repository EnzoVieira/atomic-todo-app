import { Actions, NewTaskButton, TaskStatusSelect } from "./styles"

export const TaskTableActions = () => {
  return (
    <>
      <Actions>
        <NewTaskButton>Add Task</NewTaskButton>

        <TaskStatusSelect name="select-status" id="select-status">
          <option className="select-options" value="all">
            All
          </option>
          <option value="done">Done</option>
          <option value="pendent">Pendent</option>
          <option value="in-progress">In Progress</option>
        </TaskStatusSelect>
      </Actions>
    </>
  )
}
