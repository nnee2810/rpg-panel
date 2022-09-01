import { UserLink } from "components"
import { IFactionLog } from "features/factions/interfaces"
import moment from "moment"
import { AiOutlineClockCircle } from "react-icons/ai"

interface RecentActionsProps {
  data: IFactionLog[]
}

export default function RecentActions({ data }: RecentActionsProps) {
  return (
    <div className="p-4 space-y-4 bg-gray-800 rounded-md">
      <div className="text-lg">Hoạt động gần đây</div>
      <table className="w-full">
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="py-4 border-t border-gray-700">
                {renderText(item.Text)}
              </td>
              <td className="w-36 border-t border-gray-700 text-right text-gray-400">
                {moment(item.time).fromNow()}{" "}
                <AiOutlineClockCircle className="inline text-lg" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
function renderText(text: string) {
  const words = text.split(" ")
  const playerName = words.shift()!
  const leaderNameIdx = words.findIndex((word) => word === "khoi") - 1

  const leaderName = words[leaderNameIdx]

  return (
    <>
      <UserLink data={playerName} />{" "}
      {leaderNameIdx < 1 ? (
        words.join(" ")
      ) : (
        <>
          {words.slice(0, leaderNameIdx).join(" ")}{" "}
          <UserLink data={leaderName} />
          {words.slice(leaderNameIdx + 2).join(" ")}
        </>
      )}
    </>
  )
}
