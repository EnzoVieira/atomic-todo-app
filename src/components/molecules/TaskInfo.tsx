import { FiCheck } from "react-icons/fi"

import { Button } from "../atoms/Button"

export const TaskInfo = () => {
  return (
    <>
      <Button icon={() => <FiCheck />} />

      <div>
        <span>Create a React project 💻</span>
        <p>5:23 AM, 01/06/2022</p>
      </div>
    </>
  )
}
