import { AiOutlineInfoCircle } from "react-icons/ai"
import { StatusMessage } from "."

export default function Empty() {
  return (
    <StatusMessage
      icon={<AiOutlineInfoCircle />}
      description="Không có dữ liệu"
    />
  )
}
