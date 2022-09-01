import { Spin } from "components"

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Spin className="text-4xl" />
    </div>
  )
}
