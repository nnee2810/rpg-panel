import { useQuery } from "@tanstack/react-query"
import { API } from "configs/api"
import { IFactionLog } from "features/factions/interfaces"

interface GetServerStatisticResponse {
  online: number
  registered: number
  houses: number
  bizz: number
  faction_logs: IFactionLog[]
}

export default function useGetServerStatistic() {
  return useQuery(
    ["get-server-statistic"],
    async () =>
      (await API.get<GetServerStatisticResponse>("/statistic/server")).data
  )
}
