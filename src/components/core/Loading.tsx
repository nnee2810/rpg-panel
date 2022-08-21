import { Spin } from "components/basic"

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Spin className="text-4xl" />
    </div>
  )
}
