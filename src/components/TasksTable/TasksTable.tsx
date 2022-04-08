import { FiCheck, FiEdit2, FiTrash2 } from "react-icons/fi"

import { Container, Content, TaskItem } from "./styles"

export const TasksTable = () => {
  return (
    <Container>
      <Content>
        <TaskItem>
          <div className="task-info">
            <button>
              <FiCheck />
            </button>

            <div>
              <span>Create a React project 💻</span>
              <p>5:23 AM, 01/06/2022</p>
            </div>
          </div>

          <div className="task-edit">
            <button>
              <FiEdit2 />
            </button>
            <button>
              <FiTrash2 />
            </button>
          </div>
        </TaskItem>
      </Content>
    </Container>
  )
}
