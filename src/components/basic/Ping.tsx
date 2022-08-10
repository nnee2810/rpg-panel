import clsx from "clsx"

interface PingProps {
  online?: boolean
}

export default function Ping({ online }: PingProps) {
  return (
    <div
      className={clsx(
        "relative w-2 h-2 rounded-full",
        online ? "bg-emerald-500" : "bg-red-500"
      )}
    >
      <div
        className={clsx(
          "absolute w-full h-full rounded-full animate-ping",
          online ? "bg-emerald-500" : "bg-red-500"
        )}
      ></div>
    </div>
  )
}
