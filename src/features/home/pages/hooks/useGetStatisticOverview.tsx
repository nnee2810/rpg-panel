import { useQuery } from "@tanstack/react-query"
import { API } from "configs/api"
import { IFactionLog } from "interfaces"

interface GetStatisticOverviewResponse {
  online: number
  registered: number
  apartments: number
  bizz: number
  faction_logs: IFactionLog[]
}

export default function useGetStatisticOverview() {
  return useQuery(
    ["get-statistic-overview"],
    async () =>
      (await API.get<GetStatisticOverviewResponse>("/statistic/overview")).data
  )
}
