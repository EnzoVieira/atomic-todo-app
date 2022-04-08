import { FiEdit2, FiTrash2 } from "react-icons/fi"

import { Button } from "../atoms/Button"

export const EditTaskButtons = () => {
  return (
    <>
      <Button icon={() => <FiEdit2 />} />

      <Button icon={() => <FiTrash2 />} />
    </>
  )
}
