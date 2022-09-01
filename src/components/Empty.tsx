import { AiOutlineInfoCircle } from "react-icons/ai"

export default function Empty() {
  return (
    <div className="py-4 flex flex-col justify-center items-center">
      <AiOutlineInfoCircle className="text-3xl" />
      <div className="mt-1 text-center">Không có dữ liệu</div>
    </div>
  )
}
