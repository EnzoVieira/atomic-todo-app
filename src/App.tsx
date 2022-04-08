import { GlobalStyle } from "./styles/global"

import { Header } from "./components/Header"
import { TasksTable } from "./components/TasksTable"

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TasksTable />
    </>
  )
}
